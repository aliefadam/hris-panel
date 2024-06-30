<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\RoleMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(["guest"])->group(function () {
    Route::get("/login", [AuthController::class, "login"])->name("login");
    Route::post("/login", [AuthController::class, "loginPost"])->name("loginPost");
});

Route::middleware(["auth"])->group(function () {
    Route::get("/", [PageController::class, "direct_staff"])->name("direct_staff");

    Route::middleware([RoleMiddleware::class . ":Staff"])->group(function () {
        Route::prefix("/staff")->group(function () {
            Route::get("/", [PageController::class, "home"])->name("staff.home");
            Route::get("/perizinan", [PageController::class, "perizinan"])->name("staff.perizinan");
            Route::get("/riwayat-izin", [PageController::class, "riwayat_izin"])->name("staff.riwayat-perizinan");
            Route::get("/data-rekapan", [PageController::class, "data_rekapan"])->name("staff.data-rekapan");
            Route::get("/profil-saya", [PageController::class, "profil_saya"])->name("staff.profil-saya");
            Route::get("/ganti-password", [PageController::class, "ganti_password"])->name("staff.ganti-password");
            Route::get("/notifikasi", [PageController::class, "notifikasi"])->name("staff.notifikasi");
        });
    });

    Route::middleware([RoleMiddleware::class . ":Manager"])->group(function () {
        Route::prefix("/hr")->group(function () {
            Route::get("/", [PageController::class, "home"])->name("hr.home");
            Route::get("/perizinan", [PageController::class, "perizinan"])->name("hr.perizinan");
            Route::get("/riwayat-izin", [PageController::class, "riwayat_izin"])->name("hr.riwayat-perizinan");
            Route::get("/pengajuan-izin", [PageController::class, "pengajuan_izin"])->name("hr.pengajuan-izin");
            Route::get("/penilaian-kpi", [PageController::class, "penilaian_kpi"])->name("hr.penilaian-kpi");
            Route::get("/daftar-karyawan", [PageController::class, "daftar_karyawan"])->name("hr.daftar-karyawan");
            Route::get("/detail-karyawan/{user}", [PageController::class, "detail_karyawan"])->name("hr.detail-karyawan");
            Route::get("/profil-saya", [PageController::class, "profil_saya"])->name("hr.profil-saya");
            Route::get("/ganti-password", [PageController::class, "ganti_password"])->name("hr.ganti-password");
            Route::get("/notifikasi", [PageController::class, "notifikasi"])->name("hr.notifikasi");
        });
    });

    Route::get("/logout", [AuthController::class, "logout"])->name("logout");
});






















// Route::get("/home", function () {
//     return Inertia::render("Home/Home");
// })->name("home");

// Route::get("/about", function () {
//     return Inertia::render("Home/About");
// })->name("about");

// Route::get('/laravel', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__ . '/auth.php';
