<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Customersinfo;
use App\Models\Reviews;
use App\Models\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Laravel\Ui\Presets\React;

class AdminController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $data = array();
        $CustomersInfo = Customersinfo :: get()->toArray(); 
        $Customers = Customer :: get()->toArray();
        $Services = Services :: get()->toArray();
        $Reviews = Reviews :: get()->toArray();
        $data  = ['customersInfo' => $CustomersInfo, 'customers' => $Customers, 'services'=> $Services, 'reviews' => $Reviews];
        return response()->view('admin', compact('data'));
   
    }

    public function markRead(Request $request, $id){
        $marked = Customersinfo :: where('id', $id)->update([
            'read' => true
        ]);
        return redirect()->back();
        // dd($id);
    }
    public function unmarkRead(Request $request, $id){
        $unmarked = Customersinfo :: where('id', $id)->update([
            'read' => false
        ]);
        return redirect()->back();
        // dd($id);
    }
    public function deleteService(Request $request, $id){
        $deleted = Customersinfo :: where('id', $id)->delete();
        return redirect()->back();
    }
    public function viewCustomers(Request $request){

        $data = array();
        $CustomersInfo = Customersinfo :: get()->toArray(); 
        $Customers = Customer :: get()->toArray();
        $Services = Services :: get()->toArray();
        $Reviews = Reviews :: get()->toArray();
        $data  = ['customersInfo' => $CustomersInfo, 'customers' => $Customers, 'services'=> $Services, 'reviews' => $Reviews];
        // dd($Customers);
        return response()->view('customers', compact('Customers'));
   
    }
    public function viewServices(Request $request){

        $data = array();
        $CustomersInfo = Customersinfo :: get()->toArray(); 
        $Customers = Customer :: get()->toArray();
        $Services = Services :: where('category', 'clothes')->get()->toArray();
        $Reviews = Reviews :: get()->toArray();
        $data  = ['customersInfo' => $CustomersInfo, 'customers' => $Customers, 'services'=> $Services, 'reviews' => $Reviews];
        // dd($Services);
        return response()->view('services', compact('Services'));
   
    }
    public function viewReviews(Request $request){

        $data = array();
        $CustomersInfo = Customersinfo :: get()->toArray(); 
        $Customers = Customer :: get()->toArray();
        $Services = Services :: get()->toArray();
        $Reviews = Reviews :: get()->toArray();
        $data  = ['customersInfo' => $CustomersInfo, 'customers' => $Customers, 'services'=> $Services, 'reviews' => $Reviews];
        // dd($Reviews);
        return response()->view('reviews', compact('Reviews'));
   
    }

    public function getServices(Request $request , $category){
        $Services = Services :: where('category', $category)->get()->toArray();
        // dd($Services);
        return response()->view('services', compact('Services'));
    }

    public function createCustomerForm(){

        return view('createCustomer');

    }

    public function createCustomer(Request $request){
        $name = $request -> input('name');
        $image = $request -> file('image')->store('public', 's3');
        $image = explode('/', $image);
        $image = $image[1];
        $background = $request -> input('background','bg-light');

        $Customers = new Customer;
        $Customers->name = $name;
        $Customers->image = $image;
        $Customers->background = $background;
        $Customers ->save();
        
        return redirect()->route('adminCustomers');
    }

    public function deleteCustomer(Request $request, $id){
        $customer = Customer::where('id', $id)->first();
        // dd($service['image']);
        Storage::disk('s3')->delete('public/'.$customer['image']);
        $customer ->delete();
        return redirect()->back();
    }

    public function newServiceForm(Request $request, $category){
        // dd($category);
        return view('newService', compact('category'));
    }
    public function editServiceForm(Request $request, $category, $id){
        $data = Services::where('id', $id)->first();
        // dd($category);
        return view('newService', compact('data'))->with(compact('category'));
    }
    public function editService(Request $request, $category, $id){
        // dd($request);
        $service = Services::where('id', $id);
        if ($request->hasFile('image')){
            $image = $request->file('image')->store('public');
            $image = explode('/', $image);
            $image = $image[1];
            $service->update([
                'header' => $request->input('product'),
                'image' => $image,
                'price' => $request->input('price')
            ]);
        }else{
            if($request->filled('product')){
                $service->update([
                    'header' => $request->input('product')
                ]);
            }
            if($request->filled('price')){
                $service->update([
                    'price' => $request->input('price')
                ]);
            }
            if($request->filled('description')){
                $service->update([
                    'description' => $request->input('description')
                ]);
            }
            
        }
        // dd($category);
        return redirect()->back()->with(compact('category'))->with('message', 'The item was updated successfully');
    }

    public function addNewService(Request $request, $category){

        $validated = $request->validate([
            'product' => 'required|max:255',
            'image' => 'required',
        ]);

        $product =$request->input('product');
        $price = $request->input('price');
        $description = $request->input('description');
        $image = $request->file('image')->store('public', 's3');
        $image = explode('/', $image);
        $image = $image[1];
        
        $service = new Services();
        $service -> header = $product;
        $service -> price = $price;
        $service -> image = $image;
        $service -> description = $description;
        $service -> category = $category;
        $service -> save();

        

        return redirect()->back()->with('message', 'The item was added successfully');
    }
    public function serviceDelete(Request $request, $category, $id){
        $service = Services::where('id', $id)->first();
        // dd($service['image']);
        Storage::disk('s3')->delete('public/'.$service['image']);
        $service ->delete();
        return redirect()->back();

    }
    public function deleteReview(Request $request, $id){
        $review = Reviews::where('id', $id)->first();
        // dd($service['image']);
        Storage::disk('s3')->delete('public/'.$review['image']);
        $review ->delete();
        return redirect()->back();
    }
    
}
