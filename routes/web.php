<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(["guest"])->group(function () {
    Route::get("/login", [AuthController::class, "login"])->name("login");
    Route::post("/login", [AuthController::class, "loginPost"])->name("loginPost");
});

Route::middleware(["auth"])->group(function () {
    Route::get("/", [PageController::class, "home"])->name("home");
    Route::get("/perizinan", [PageController::class, "perizinan"])->name("perizinan");
    Route::get("/riwayat-izin", [PageController::class, "riwayat_izin"])->name("riwayat-perizinan");
    Route::get("/data-rekapan", [PageController::class, "data_rekapan"])->name("data-rekapan");
    Route::get("/profil-saya", [PageController::class, "profil_saya"])->name("profil-saya");
    Route::get("/ganti-password", [PageController::class, "ganti_password"])->name("ganti-password");
    Route::get("/notifikasi", [PageController::class, "notifikasi"])->name("notifikasi");

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
