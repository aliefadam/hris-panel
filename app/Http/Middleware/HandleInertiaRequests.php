<?php

namespace App\Http\Middleware;

use App\Models\Notification;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'message' => fn () => $request->session()->get('message'),
            "notifikasi" => function () {
                if (!auth()->user()) {
                    return [];
                } else {
                    $notifikasi = [];
                    foreach (Notification::where("employee_id", auth()->user()->employee->id)->where("status_dibaca", false)->orderBy("id", "DESC")->get() as $notif) {
                        $user_id = json_decode($notif->pesan, true)["from"];
                        $name = User::find($user_id)->name;
                        $foto = User::find($user_id)->employee->foto;
                        $notifikasi[] = [
                            "nama" => $name,
                            "divisi" => generate_division_and_sub_division($user_id),
                            "foto" => $foto,
                            "header" => json_decode($notif->pesan, true)["header"],
                            "title" => json_decode($notif->pesan, true)["title"],
                            "waktu" => $notif->created_at->diffForHumans(),
                            "waktu_ori" => $notif->created_at->translatedFormat("l, d F Y - H:i:s"),
                            "body" => json_decode($notif->pesan, true)["body"],
                        ];
                    }
                    return $notifikasi;
                }
            }
        ];
    }
}
