@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Dashboard</h1>
    <a href="/admin/customers/create"><button type="button" class="btn btn-success">New customer</button></a>
    <div class="d-flex flex-wrap">
        @foreach($Customers as $key => $customer)
        <div class="card mt-3 mx-auto" style="width: 200px;">
            <div style="width: 100%; height: 100px;" class="d-flex align-items-center justify-content-center {{$customer['background']==''?'bg-dark':$customer['background']}}">
                <img style="width: 100px;" src="/storage/{{$customer['image']}}" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
            <h5 class="card-title">{{$customer['name']}}</h5>
           </div>
           <a href="/admin/customers/{{$customer['id']}}/delete"><button type="button" class="btn btn-danger m-3">Delete</button></a>
        </div>
        @endforeach
    </div>
</div>
@endsection
