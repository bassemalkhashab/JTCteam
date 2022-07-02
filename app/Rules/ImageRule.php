<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class ImageRule implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        
        if (!is_string($value)){
            $allowedMimeTypes = ['image/jpeg','image/gif','image/png'];
            $contentType = $value -> getClientMimeType();
            return in_array($contentType, $allowedMimeTypes);
        }
        else {
            return true;
        }
        
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return response()->json('error: Not an image');
    }
}
