<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->foreignId("position_id");
            $table->foreignId("division_id");
            $table->foreignId("sub_division_id")->nullable();
            $table->foreignId("branch_id");
            $table->string("no_telephone");
            $table->string("no_telephone_wa");
            $table->text("alamat");
            $table->string("agama");
            $table->date("tanggal_mulai_kontrak");
            $table->date("tanggal_akhir_kontrak");
            $table->string("nomor_rekening");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
