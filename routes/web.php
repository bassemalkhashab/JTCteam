<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\CustomersController;
use App\Http\Controllers\ReviewsController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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
Route::post('/contact', [ContactController::class, 'orderRequest']);

Route::get('/about', function () {
    return view('home');
});
Route::get('/about/reviews', function () {
    return view('home');
});

Route::post('/about/reviews', [ReviewsController::class, 'submitReview']);
Route::get('/about/get-reviews', [ReviewsController::class, 'getReviews']);

Route::get('/about/customers', [CustomersController::class, 'displayAll']);

Route::get('/service',[ServiceController::class,'displayPage']);
Route::get('/service/details',[ServiceController::class,'getServices']);

Route::get('/market', function () {
    return view('home');
});
Route::get('/reviews', function () {
    return view('home');
});

Auth::routes();
Route::get('/register', function(){return redirect('/login');});
Route::get('/password/reset', function(){return redirect('/login');});

Route::get('/admin', [AdminController::class, 'index'])->name('admin');
Route::get('/admin/service/{id}/mark', [AdminController::class, 'markRead']);
Route::get('/admin/service/{id}/unmark', [AdminController::class, 'unmarkRead']);
Route::get('/admin/service/{id}/delete', [AdminController::class, 'deleteService']);
Route::get('/admin/service/{id}/delete', [AdminController::class, 'deleteService']);
Route::get('/admin/customers', [AdminController::class, 'viewCustomers'])->name('adminCustomers');
Route::get('/admin/customers/create', [AdminController::class, 'createCustomerForm']);
Route::post('/admin/customers/create', [AdminController::class, 'createCustomer']);
Route::get('/admin/customers/{id}/delete', [AdminController::class, 'deleteCustomer']);
// Route::get('/admin/services', [AdminController::class, 'viewServices']);
Route::get('/admin/services', function (){ return redirect('/admin/services/clothes');});
Route::get('/admin/services/{category}', [AdminController::class, 'getServices'])->name('AllServices');
Route::get('/admin/services/{category}/new', [AdminController::class, 'newServiceForm']);
Route::get('/admin/services/{category}/edit/{id}', [AdminController::class, 'editServiceForm']);
Route::post('/admin/services/{category}/edit/{id}', [AdminController::class, 'editService']);
Route::get('/admin/services/{category}/delete/{id}', [AdminController::class, 'serviceDelete']);
Route::post('/admin/services/{category}/new', [AdminController::class, 'addNewService']);
Route::get('/admin/reviews', [AdminController::class, 'viewReviews']);
Route::get('/admin/reviews/delete/{id}', [AdminController::class, 'deleteReview']);
Route::get('/storage/{filename}', [ServiceController::class, 'showImage']);