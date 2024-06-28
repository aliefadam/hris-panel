<?php

namespace Database\Seeders;

use App\Models\Employee;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Employee::create([
            'position_id' => 4,
            'division_id' => 10,
            'sub_division_id' => 20,
            'branch_id' => 1,
            'no_telephone' => '08123456789',
            'no_telephone_wa' => '08123456789',
            'alamat' => 'Jl. Kebon Jeruk No. 21, Jakarta',
            'agama' => 'Islam',
            'tanggal_mulai_kontrak' => '2023-01-01',
            'tanggal_akhir_kontrak' => '2024-01-01',
            'nomor_rekening' => '1234567890',
        ]);

        Employee::create([
            'position_id' => 2,
            'division_id' => 4,
            'sub_division_id' => null,
            'branch_id' => 2,
            'no_telephone' => '08129876543',
            'no_telephone_wa' => '08129876543',
            'alamat' => 'Jl. Melati No. 15, Bandung',
            'agama' => 'Kristen',
            'tanggal_mulai_kontrak' => '2023-02-01',
            'tanggal_akhir_kontrak' => '2024-02-01',
            'nomor_rekening' => '0987654321',
        ]);

        Employee::create([
            'position_id' => 3,
            'division_id' => 10,
            'sub_division_id' => 20,
            'branch_id' => 3,
            'no_telephone' => '08121234567',
            'no_telephone_wa' => '08121234567',
            'alamat' => 'Jl. Mangga No. 7, Surabaya',
            'agama' => 'Hindu',
            'tanggal_mulai_kontrak' => '2023-03-01',
            'tanggal_akhir_kontrak' => '2024-03-01',
            'nomor_rekening' => '1122334455',
        ]);
    }
}
