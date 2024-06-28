<?php

namespace Database\Seeders;

use App\Models\Division;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DivisionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Division::create([
            "division_name" => "Accounting",
        ]);
        Division::create([
            "division_name" => "Sales",
        ]);
        Division::create([
            "division_name" => "Project Manager",
        ]);
        Division::create([
            "division_name" => "HR",
        ]);
        Division::create([
            "division_name" => "Retail",
        ]);
        Division::create([
            "division_name" => "Online",
        ]);
        Division::create([
            "division_name" => "Data Center",
        ]);
        Division::create([
            "division_name" => "Digital Marketing",
        ]);
        Division::create([
            "division_name" => "Product SPC",
        ]);
        Division::create([
            "division_name" => "IT",
        ]);
        Division::create([
            "division_name" => "SERVICE",
        ]);
        Division::create([
            "division_name" => "Warehouse",
        ]);
    }
}
