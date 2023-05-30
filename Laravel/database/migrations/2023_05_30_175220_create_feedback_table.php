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
        Schema::create('feedback', function (Blueprint $table) {
            $table->string('customer_phone')->primary();
            $table->string('customer_topic');
            $table->string('customer_retaurant');
            $table->timestamp('customer_datetime');
            $table->string('customer_name');
            $table->string('customer_email');
            $table->string('customer_address')->nullable();
            $table->binary('customer_image')->nullable();
            $table->string('customer_message');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feedback');
    }
};
