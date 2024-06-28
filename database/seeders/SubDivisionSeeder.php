<?php

namespace Database\Seeders;

use App\Models\SubDivision;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubDivisionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SubDivision::create([
            "division_id" => "1",
            "sub_division_name" => "Accounting",
        ]);
        SubDivision::create([
            "division_id" => "1",
            "sub_division_name" => "Tax",
        ]);
        SubDivision::create([
            "division_id" => "2",
            "sub_division_name" => "Distribution",
        ]);
        SubDivision::create([
            "division_id" => "2",
            "sub_division_name" => "Telemarketing",
        ]);
        SubDivision::create([
            "division_id" => "3",
            "sub_division_name" => "Admin",
        ]);
        SubDivision::create([
            "division_id" => "3",
            "sub_division_name" => "Product Spesialis",
        ]);
        SubDivision::create([
            "division_id" => "3",
            "sub_division_name" => "Sales",
        ]);
        SubDivision::create([
            "division_id" => "4",
            "sub_division_name" => "Admin",
        ]);
        SubDivision::create([
            "division_id" => "5",
            "sub_division_name" => "Sales",
        ]);
        SubDivision::create([
            "division_id" => "6",
            "sub_division_name" => "Uploader",
        ]);
        SubDivision::create([
            "division_id" => "6",
            "sub_division_name" => "Designer",
        ]);
        SubDivision::create([
            "division_id" => "6",
            "sub_division_name" => "Chatter",
        ]);
        SubDivision::create([
            "division_id" => "6",
            "sub_division_name" => "Marketplace Development",
        ]);
        SubDivision::create([
            "division_id" => "6",
            "sub_division_name" => "Admin Nota",
        ]);
        SubDivision::create([
            "division_id" => "7",
            "sub_division_name" => "Admin",
        ]);
        SubDivision::create([
            "division_id" => "8",
            "sub_division_name" => "Content Creator",
        ]);
        SubDivision::create([
            "division_id" => "8",
            "sub_division_name" => "SEO SPC",
        ]);
        SubDivision::create([
            "division_id" => "11",
            "sub_division_name" => "Pengiriman",
        ]);
        SubDivision::create([
            "division_id" => "11",
            "sub_division_name" => "Admin",
        ]);
        SubDivision::create([
            "division_id" => "10",
            "sub_division_name" => "Developer",
        ]);
        SubDivision::create([
            "division_id" => "11",
            "sub_division_name" => "IT Support",
        ]);
        SubDivision::create([
            "division_id" => "12",
            "sub_division_name" => "Sopir",
        ]);
        SubDivision::create([
            "division_id" => "12",
            "sub_division_name" => "Picker",
        ]);
        SubDivision::create([
            "division_id" => "12",
            "sub_division_name" => "Checker",
        ]);
        SubDivision::create([
            "division_id" => "12",
            "sub_division_name" => "Helper",
        ]);
        SubDivision::create([
            "division_id" => "12",
            "sub_division_name" => "Admin",
        ]);
    }
}
