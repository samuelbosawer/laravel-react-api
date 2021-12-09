<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sacode extends Model
{
    
    use HasFactory;
    protected $table = 'sacodes';
    protected $fillable=[
        'nama',
        'topik',
        'tanggal',
        'kategori'
    ];
}
