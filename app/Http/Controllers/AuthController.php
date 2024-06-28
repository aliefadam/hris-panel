<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render("MyAuth/Login");
    }

    public function loginPost(Request $request)
    {
        $credentials = [
            "email" => $request->email,
            "password" => $request->password
        ];

        if (Auth::attempt($credentials)) {
            return redirect("/");
        } else {
            return redirect("/login")->with([
                "message" => [
                    "tipe" => "error",
                    "pesan" => "Email atau Password salah!",
                ],
            ]);
        }
    }

    public function logout()
    {
        Auth::logout();
        return redirect("/");
    }
}
