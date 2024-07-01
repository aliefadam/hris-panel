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
        Schema::create('perizinans', function (Blueprint $table) {
            $table->id();
            $table->foreignId("employee_id");
            $table->string("jenis_izin");
            $table->date("tanggal_mulai");
            $table->date("tanggal_akhir");
            $table->time("jam")->nullable();
            $table->string("catatan")->nullable();
            $table->string("file_pendukung")->nullable();
            $table->string("status")->nullable();
            $table->string("feedback")->nullable();
            $table->string("disetujui_oleh")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('perizinans');
    }
};
