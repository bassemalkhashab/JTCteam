<?php

namespace App\Http\Controllers;

use App\Models\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
    public function showImage(Request $request, $filename){
        // $image = Storage::disk('s3')->;
        // dd($image);
        return Storage::disk('s3')->response('public/'.$filename);
    }
}
