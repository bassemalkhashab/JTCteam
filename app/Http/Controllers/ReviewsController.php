<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reviews;

class ReviewsController extends Controller
{
    //
    
    public function submitReview(Request $request){
        
        if ($request->file('image')) {
            $data = json_decode($request["data"]);
            
            $Reviews=new Reviews;
            $image = $request->file('image')->store('public');
            $image = explode('/', $image);
            $image = $image[1];
            $Reviews->name = $data->name;
            $Reviews->review = $data->review;
            $Reviews->stars = $data->stars;
            $Reviews->image = $image;
            $Reviews->save();
            return response()->json('{"success":"Your review has been added"}');
        }
        else{

            $Reviews=new Reviews;
            $data = json_decode($request["data"]);
            $Reviews->name = $data->name;
            $Reviews->review = $data->review;
            $Reviews->stars = $data->stars;
            $Reviews->image = "default-photo.png";
            $Reviews->save();
            return response()->json('{"success":"Your review has been added"}');
    
        }
    }

    public function getReviews(){

            $Reviews = Reviews::get()->toArray();
            return response()->json($Reviews);
            
    }

}
