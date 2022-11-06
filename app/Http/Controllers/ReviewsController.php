<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubmitReviewRequest;
use Illuminate\Http\Request;
use App\Models\Reviews;

class ReviewsController extends Controller
{
        
    public function submitReview(SubmitReviewRequest $request){

        if ($request->file('image')) {

            $data = json_decode($request["data"]);            
            $Reviews=new Reviews;
            $image = $request->file('image')->store('public', 's3');
            $image = explode('/', $image);
            $image = $image[1];
            $Reviews->name = $data->name;
            $Reviews->review = $data->review;
            $Reviews->stars = $data->stars;
            $Reviews->image = $image;
            $Reviews->save();
            return response()->json(["success"=>true, "image"=>$image]);

        }

        else{

            $Reviews=new Reviews;
            $data = json_decode($request["data"]);
            $Reviews->name = $data->name;
            $Reviews->review = $data->review;
            $Reviews->stars = $data->stars;
            $Reviews->image = "default-photo.png";
            $Reviews->save();
            return response()->json(["success"=>true, "image"=> "default-photo.png"]);
    
        }
    }

    public function getReviews(){

            $Reviews = Reviews::get()->toArray();
            return response()->json($Reviews);
            
    }

}
