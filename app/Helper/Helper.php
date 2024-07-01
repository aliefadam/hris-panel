<?php

use App\Models\User;

if (!function_exists("generate_file_name")) {
    function generate_file_name($user_id, $folder_destination, $extension)
    {
        return "uploads/{$folder_destination}/{$user_id}_" . date("YmdHis") . ".{$extension}";
    }
}

if (!function_exists("generate_division_and_sub_division")) {
    function generate_division_and_sub_division($user_id)
    {
        $user = User::find($user_id);
        $division_name = $user->employee->division->division_name;
        $sub_division_name = $user->employee->sub_division->sub_division_name ?? "";
        if ($sub_division_name == "") {
            return $division_name;
        } else {
            return "{$division_name} - {$sub_division_name}";
        }
    }
}