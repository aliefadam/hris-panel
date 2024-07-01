<?php

namespace App\Http\Controllers;

use App\Mail\BalasPerizinan;
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
            Mail::to($penerima->email)->queue(new KirimPerizinan($dataEmailView));
            Notification::create([
                "employee_id" => $penerima->id,
                "tanggal_jam" => date("Y-m-d H:i:s"),
                "pesan" => json_encode([
                    "from" => $user->employee->id,
                    "title" => "Pengajuan Izin Baru",
                    "header" => "Perhatian, Ada pengajuan izin baru yang perlu diverifikasi. Mohon segera tinjau pengajuan tersebut untuk memastikan kelancaran proses persetujuan. Pengajuan izin baru ini mungkin membutuhkan perhatian Anda dalam waktu dekat. Terima kasih atas kerja sama Anda.",
                    "body" => [
                        "nama" => $user->name,
                        "jenis_izin" => $dataPerizinan["jenis_izin"],
                        "divisi" => generate_division_and_sub_division($user->id),
                        "tanggal_mulai" => $dataPerizinan["tanggal_mulai"],
                        "tanggal_akhir" => $dataPerizinan["tanggal_akhir"],
                        "catatan" => $dataPerizinan["catatan"],
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

    public function balas_perizinan(Request $request)
    {
        // mengambil data jabatan
        $position = get_role(auth()->user()->id);
        // mengambil data perizinan
        $perizinan = Perizinan::find($request->perizinan_id);
        if ($position == 'hr') {
            $pemberiRespon = 'HRD';
        } else {
            $pemberiRespon = "Head";
        }
        // mengupdate perizinan
        $perizinan->update([
            "feedback" => $request->feedback,
            "status" => $request->jawaban == "terima" ? "Disetujui {$pemberiRespon}" : "Ditolak {$pemberiRespon}",
        ]);

        // menyiapkan email
        $emailPengaju = User::find($perizinan->employee_id)->email;
        $dataEmailView = [
            "pemberi_respon" => $pemberiRespon,
            "feedback" => $request->feedback,
            "title" => $request->jawaban == "terima" ? "Izin Disetujui" : "Izin Ditolak",
            "pesan" => $request->jawaban == "terima" ? "Selamat, pengajuan izin Anda telah disetujui. Kami ingin memberitahu Anda bahwa izin yang Anda ajukan telah diterima dan telah diresmikan. Terima kasih atas kerja sama Anda dalam mematuhi prosedur yang berlaku." : "Kami menghargai waktu dan usaha Anda dalam mengajukan izin. Setelah melalui pertimbangan yang cermat, kami harus menyampaikan bahwa pengajuan izin Anda tidak dapat kami setujui pada kesempatan ini. Keputusan ini diambil berdasarkan pedoman dan kriteria yang telah ditetapkan",
        ];
        // mengirim email
        Mail::to($emailPengaju)->queue(new BalasPerizinan($dataEmailView));
        // kirim notifikasi
        Notification::create([
            "employee_id" => User::find($perizinan->employee_id)->id,
            "tanggal_jam" => date("Y-m-d H:i:s"),
            "pesan" => json_encode([
                "from" => auth()->user()->employee->id,
                "title" => $request->jawaban == "terima" ? "Izin Disetujui" : "Izin Ditolak",
                "header" => $request->jawaban == "terima" ? "Selamat, pengajuan izin Anda telah disetujui. Kami ingin memberitahu Anda bahwa izin yang Anda ajukan telah diterima dan telah diresmikan. Terima kasih atas kerja sama Anda dalam mematuhi prosedur yang berlaku." : "Kami menghargai waktu dan usaha Anda dalam mengajukan izin. Setelah melalui pertimbangan yang cermat, kami harus menyampaikan bahwa pengajuan izin Anda tidak dapat kami setujui pada kesempatan ini. Keputusan ini diambil berdasarkan pedoman dan kriteria yang telah ditetapkan",
                "body" => [
                    "Pemberi Tanggapan" => $pemberiRespon,
                    "feedback" => $request->feedback,
                ]
            ]),
            "status_dibaca" => false,
        ]);
        return redirect()->back();
    }
}
