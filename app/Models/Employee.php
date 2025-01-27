<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $guarded = ["id"];
    protected $with = ["branch", "position", "division", "sub_division", "notification", "perizinan"];


    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    public function position()
    {
        return $this->belongsTo(Position::class);
    }

    public function division()
    {
        return $this->belongsTo(Division::class);
    }

    public function sub_division()
    {
        return $this->belongsTo(SubDivision::class);
    }

    public function notification()
    {
        return $this->hasMany(Notification::class);
    }

    public function perizinan()
    {
        return $this->hasMany(Perizinan::class);
    }
}
