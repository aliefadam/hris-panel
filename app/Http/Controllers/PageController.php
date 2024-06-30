<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function direct_staff()
    {
        return redirect("/staff");
    }

    public function home()
    {
        $user = auth()->user();
        return Inertia::render("Home/Home", [
            "title" => "Home",
            "users" => [
                "name" => $user->name,
                "email" => $user->email,
                "division" => $user->employee->division->division_name,
                "sub_division" => $user->employee->sub_division->sub_division_name ?? "",
                "branch" => $user->employee->branch->branch_name,
                "no_telephone" => $user->employee->no_telephone,
            ],
        ]);
    }

    public function perizinan()
    {
        return Inertia::render("Perizinan/Perizinan", [
            "title" => "Perizinan",
        ]);
    }

    public function riwayat_izin()
    {
        return Inertia::render("Perizinan/RiwayatIzin", [
            "title" => "Riwayat Izin",
        ]);
    }

    public function pengajuan_izin()
    {
        return Inertia::render("Perizinan/PengajuanIzin", [
            "title" => "Pengajuan Izin",
        ]);
    }

    public function penilaian_kpi()
    {
        return Inertia::render("KPI/DaftarPenilaianKPI", [
            "title" => "Daftar Penilaian KPI",
        ]);
    }

    public function daftar_karyawan()
    {
        return Inertia::render("Karyawan/DaftarKaryawan", [
            "title" => "Daftar Karyawan",
            "user" => User::all(),
        ]);
    }

    public function detail_karyawan(User $user)
    {
        return Inertia::render("Karyawan/DetailKaryawan", [
            "title" => "Detail Karyawan",
            "user" => [
                "name" => $user->name,
                "email" => $user->email,
                "image" => $user->image,
                "division" => $user->employee->division->division_name,
                "sub_division" => $user->employee->sub_division->sub_division_name ?? "",
            ],
            "profile" => [
                [
                    "title" => "Email",
                    "value" => $user->email,
                ],
                [
                    "title" => "Cabang",
                    "value" => $user->employee->branch->branch_name,
                ],
                [
                    "title" => "No Telepon",
                    "value" => $user->employee->no_telephone,
                ],
                [
                    "title" => "No Telepon Whatsapp",
                    "value" => $user->employee->no_telephone,
                ],
                [
                    "title" => "Alamat",
                    "value" => $user->employee->alamat,
                ],
                [
                    "title" => "Agama",
                    "value" => $user->employee->agama,
                ],
                [
                    "title" => "Tanggal Mulai Kontrak",
                    "value" => $user->employee->tanggal_mulai_kontrak,
                ],
                [
                    "title" => "Tanggal Berakhir Kontrak",
                    "value" => $user->employee->tanggal_akhir_kontrak,
                ],
                [
                    "title" => "Nomor Rekening",
                    "value" => $user->employee->nomor_rekening,
                ],
            ]
        ]);
    }

    public function profil_saya()
    {
        $user = auth()->user();
        return Inertia::render("Profile/Profile", [
            "title" => "Profil Saya",
            "profile" => [
                [
                    "title" => "Email",
                    "value" => $user->email,
                ],
                [
                    "title" => "Cabang",
                    "value" => $user->employee->branch->branch_name,
                ],
                [
                    "title" => "No Telepon",
                    "value" => $user->employee->no_telephone,
                ],
                [
                    "title" => "No Telepon Whatsapp",
                    "value" => $user->employee->no_telephone,
                ],
                [
                    "title" => "Alamat",
                    "value" => $user->employee->alamat,
                ],
                [
                    "title" => "Agama",
                    "value" => $user->employee->agama,
                ],
                [
                    "title" => "Tanggal Mulai Kontrak",
                    "value" => $user->employee->tanggal_mulai_kontrak,
                ],
                [
                    "title" => "Tanggal Berakhir Kontrak",
                    "value" => $user->employee->tanggal_akhir_kontrak,
                ],
                [
                    "title" => "Nomor Rekening",
                    "value" => $user->employee->nomor_rekening,
                ],
            ],
            "user" => [
                "name" => $user->name,
                "email" => $user->email,
                "image" => $user->image,
            ]
        ]);
    }

    public function ganti_password()
    {
        return Inertia::render("Profile/GantiPassword", [
            "title" => "Ganti Password",
        ]);
    }

    public function notifikasi()
    {
        return Inertia::render("Notifikasi/Notifikasi", [
            "title" => "Notifikasi",
        ]);
    }

    public function data_rekapan()
    {
        return Inertia::render("Rekapan/DataRekapan", [
            "title" => "Notifikasi",
            "dataRekap" => [
                [
                    "title" => "Kehadiran",
                    "value" => "20 Hari",
                ],
                [
                    "title" => "Lembur",
                    "value" => "20 Jam",
                ],
                [
                    "title" => "Dinas Luar",
                    "value" => "20 Hari",
                ],
                [
                    "title" => "Izin Luar Cuti",
                    "value" => "10 Hari",
                ],
            ],
            "dataKinerja" => [
                [
                    "title" => "Kedisiplinan",
                    "value" => "100%",
                ],
                [
                    "title" => "Penilaian Tanggung Jawab",
                    "value" => "A",
                ],
                [
                    "title" => "Mendapat Apresiasi",
                    "value" => true,
                ],
            ]
        ]);
    }
}
