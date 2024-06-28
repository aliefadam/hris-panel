<?php

namespace Database\Seeders;

use App\Models\Position;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Position::create([
            "position_name" => "Direktur",
        ]);
        Position::create([
            "position_name" => "Manager",
        ]);
        Position::create([
            "position_name" => "Head",
        ]);
        Position::create([
            "position_name" => "Staff",
        ]);
        Position::create([
            "position_name" => "Intern",
        ]);
    }
}
