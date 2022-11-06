<?php

namespace App\Http\Controllers;

use App\Models\Customersinfo;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    //

    public  function orderRequest(Request $request){
        $data = $request->json()->all();
        $customersinfo = new Customersinfo;
        $customersinfo->fname = $data["fname"];
        $customersinfo->lname = $data["lname"];
        $customersinfo->phone = $data["phone"];
        $customersinfo->address1 = $data["address1"];
        $customersinfo->address2 = $data["address2"];
        $customersinfo->category = $data["category"];
        $customersinfo->email = $data["email"];
        $customersinfo->zipcode = $data["postalCode"];
        $customersinfo->unit = $data["unit"];
        $customersinfo->service = $data["service"];
        $customersinfo->list =json_encode($data["list"]);
        $customersinfo->save();
        return response()->json($data["list"]);
    }
}
