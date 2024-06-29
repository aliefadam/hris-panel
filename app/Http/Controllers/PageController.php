<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        $user = auth()->user();
        return Inertia::render("Home/Home", [
            "title" => "Home",
            "users" => [
                "name" => $user->name,
                "email" => $user->email,
                "division" => $user->employee->division->division_name,
                "sub_division" => $user->employee->sub_division->sub_division_name,
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

    public function profil_saya()
    {
        return Inertia::render("Profile/Profile", [
            "title" => "Profil Saya",
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
