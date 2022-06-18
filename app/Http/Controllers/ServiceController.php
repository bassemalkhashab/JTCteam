<?php

namespace App\Http\Controllers;

use App\Models\Services;
use Illuminate\Http\Request;
use Nette\Utils\Json;

class ServiceController extends Controller
{
    //
    public function displayPage(Request $request){



       
        
        return response()->view('home');
    }
    public function getServices(Request $request){

        $category = $request->category;
        $service = $request->service;

        
        $Services = Services::where('category', $category)->get();
        return response()->json($Services);
    }
}
