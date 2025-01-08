<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'job_title',
        'company_name',
        'industry',
        'phone_number',
        'agree_to_contact'
    ];
}
