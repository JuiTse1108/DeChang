<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;
    protected $table = 'feedbacks';
    // protected $primaryKey = 'id';
    // protected $keytype = 'string';
    protected $fillable = [
        'customer_topic',
        'customer_restaurant',
        'customer_datetime',
        'customer_name',
        'customer_phone',
        'customer_email',
        'customer_address',
        // 'customer_upload',
        'customer_message'
    ];
}
