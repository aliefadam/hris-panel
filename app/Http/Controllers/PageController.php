<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render("Home/Home", [
            "title" => "Home",
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
}
