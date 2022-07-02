<?php

namespace App\Http\Requests;

use App\Rules\ImageRule;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class SubmitReviewRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            //

            
            'image' => new ImageRule(),
            // 'name' => 'required',
            // 'review'=> 'required',
            "data"=> 'required'

        ];
    }

    public function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->json([
            'success' => false,
            'message' => 'Validation errors',
            'errors' => $validator->errors()
        ]));
    }

    // public function messages()
    // {
    //     return [
    //         'image.mimes' => 'Unsupported file type',
    //         'data.required' => 'Data is required'
    //     ];
    // }
}
