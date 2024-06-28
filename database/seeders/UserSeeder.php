<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            "employee_id" => 1,
            "name" => "Alief Adam",
            "email" => "aliefadam6@gmail.com",
            "password" => bcrypt("123"),
        ]);
        User::create([
            "employee_id" => 2,
            "name" => "Deasy Mei",
            "email" => "deasymei@gmail.com",
            "password" => bcrypt("123"),
        ]);
        User::create([
            "employee_id" => 3,
            "name" => "Deny",
            "email" => "deny@gmail.com",
            "password" => bcrypt("123"),
        ]);
    }
}
