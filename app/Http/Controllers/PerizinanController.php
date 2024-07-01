<?php

namespace App\Http\Controllers;

use App\Mail\KirimPerizinan;
use App\Models\Employee;
use App\Models\Notification;
use App\Models\Perizinan;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Mail;

class PerizinanController extends Controller
{
    public function ajukan_perizinan(Request $request)
    {
        $user = auth()->user();
        // data yang disiapkan untuk ke database
        $dataPerizinan = [
            "employee_id" => $user->employee->id,
            "jenis_izin" => $request->izin,
            "tanggal_mulai" => $request->tanggalMulai,
            "tanggal_akhir" => $request->tanggalAkhir,
            "catatan" => $request->catatan ?? "-",
            "status" => "pending",
        ];

        // jika user mengirim file
        if ($request->filePendukung != null) {
            $filePendukung = $request->file("filePendukung");
            $extension = $filePendukung->extension();
            $namaFile = generate_file_name($user->employee->id, "perizinan", $extension);
            $filePendukung->storeAs("public/", $namaFile);
            $dataPerizinan["file_pendukung"] = $namaFile;
        }

        // siapkan penerima email
        $penerimaEmail = [];
        foreach (User::all() as $employee) {
            if ($employee->employee->division_id == $user->employee->division_id) {
                if ($employee->employee->id != $user->employee->id) {
                    $penerimaEmail[] = $employee;
                }
            }
        }

        // memasukkan HRD ke penerima email
        $DIVISI_ID_HRD = 4;
        $HRD_ID = Employee::firstWhere("division_id", $DIVISI_ID_HRD)->id;
        $emailHRD = User::find($HRD_ID);
        array_push($penerimaEmail, $emailHRD);

        // menyiapkan data yang akan ditampilkan ke email
        $dataEmailView = [
            "nama_pengaju" => $user->name,
            "divisi" => generate_division_and_sub_division($user->id),
            "jenis_izin" => $dataPerizinan["jenis_izin"],
            "tanggal_mulai" => $dataPerizinan["tanggal_mulai"],
            "tanggal_akhir" => $dataPerizinan["tanggal_akhir"],
            "catatan" => $dataPerizinan["catatan"],
        ];

        // memasukkan data ke dalam database
        Perizinan::create($dataPerizinan);

        // mengirim email dan mengirim notifikasi
        foreach ($penerimaEmail as $penerima) {
            Mail::to($penerima->email)->send(new KirimPerizinan($dataEmailView));
            Notification::create([
                "employee_id" => $penerima->id,
                "tanggal_jam" => date("Y-m-d H:i:s"),
                "pesan" => json_encode([
                    "from" => [
                        "name" => $user->name,
                        "image" => $user->employee->foto,
                    ],
                    "title" => "Pengajuan Izin Baru",
                    "body" => [
                        "nama" => $user->name,
                        "divisi" => generate_division_and_sub_division($user->id),
                        "tanggal_mulai" => $dataPerizinan["tanggal_mulai"],
                        "tanggal_akhir" => $dataPerizinan["tanggal_akhir"],
                        "catatan" => $dataPerizinan["catatan"],
                        "file_pendukung" => $request->filePendukung != null ? $dataPerizinan["file_pendukung"] : "-",
                    ]
                ]),
                "status_dibaca" => false,
            ]);
        }

        return redirect()->back()->with("message", [
            "tipe" => "success",
            "pesan" => "Berhasil Mengajukan Perizinan",
        ]);
    }
}
