<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    //

    public  function orderRequest(Request $request){
        $data = $request->json();

        return response()->json([
            'name' => 'Abigail',
            'state' => 'CA',
        ]);
    }
}
