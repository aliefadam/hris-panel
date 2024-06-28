<?php

namespace Database\Seeders;

use App\Models\Branch;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Branch::create([
            "branch_name" => "Surabaya - Tenggilis",
            "address" => "Raya Tenggilis Mejoyo No.AA - 3, Kali Rungkut, Kec. Rungkut, Surabaya, Jawa Timur 60293"
        ]);
        Branch::create([
            "branch_name" => "Surabaya - ITC",
            "address" => "ITC Surabaya Mega Grosir Lt.2 Blok L7 No.8 Jl. Gembong No.20 - 30, Kapasan, Kec. Simokerto, Surabaya, Jawa Timur 60141"
        ]);
        Branch::create([
            "branch_name" => "Yogyakarta",
            "address" => "JI. Kemuning Gandok No.C12, Pikgondeng, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281"
        ]);
        Branch::create([
            "branch_name" => "Jakarta",
            "address" => "Kompleks Ruko Aeroworld Blok C1 No. 5, Citra 8, Citra Garden City, RT.4/RW.8, Daerah Khusus Ibukota Jakarta 11830"
        ]);
        Branch::create([
            "branch_name" => "Semarang",
            "address" => "JI. Semarang Indah Blok C8 No.24, Tawangmas, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50144"
        ]);
        Branch::create([
            "branch_name" => "Malang",
            "address" => "Jl. Seram No.21, Kasin, Kec. Klojen, Malang, Jawa Timur 65117"
        ]);
        Branch::create([
            "branch_name" => "Bali",
            "address" => "Jl. Raya Sesetan No.119a, Sesetan, Denpasar Selatan, Kota Denpasar, Bali 80223"
        ]);
    }
}
