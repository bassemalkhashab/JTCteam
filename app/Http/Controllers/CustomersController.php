<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomersController extends Controller
{
    //

    public function displayAll(){
        $customers = Customer::get()->toArray();
        // dd($customers);
        return response()->json($customers);
    }
}
