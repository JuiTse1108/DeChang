<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FeedBack extends Model
{
    use HasFactory;

    protected $primaryKey = 'customer_phone';

    protected $fillable = [
        'customer_topic',
        'customer_retaurant',
        'customer_datetime',
        'customer_name',
        'customer_email',
        'customer_address',
        'customer_image',
        'customer_message'
    ];
}
