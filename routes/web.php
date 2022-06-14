<?php

use App\Http\Controllers\CustomersController;
use App\Http\Controllers\ReviewsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
})->name('home');
Route::get('/contact', function () {
    return view('home');
});
Route::get('/about', function () {
    return view('home');
});
Route::get('/about/reviews', function () {
    return view('home');
});

Route::post('/about/reviews', [ReviewsController::class, 'submitReview']);
Route::get('/about/get-reviews', [ReviewsController::class, 'getReviews']);

Route::get('/about/customers', [CustomersController::class, 'displayAll']);

Route::get('/service', function () {
    return view('home');
});
Route::get('/service/residential', function () {
    return view('home');
});
Route::get('/service/commercial', function () {
    return view('home');
});
Route::get('/service/clothes', function () {
    return view('home');
});
Route::get('/market', function () {
    return view('home');
});
Route::get('/reviews', function () {
    return view('home');
});
