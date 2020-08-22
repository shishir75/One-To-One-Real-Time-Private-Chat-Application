<?php

namespace App\Http\Controllers;

use App\User;

class MessageController extends Controller
{
    public function __construct()
    {
        $this->middleware( 'auth' );
    }

    public function user_list()
    {
        $users = User::latest()->get();

        return response()->json( $users, 200 );
    }
}
