@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Dashboard</h1>
    @foreach($Reviews as $review)
    <div class="m-auto card w-75">
        <div class="card-body">
            <img src="/storage/{{$review['image']}}" alt="image" width="100" height="100">
            <h5 class="card-title">{{$review['name']}}</h5>
            <p class="card-text">{{$review['review']}}</p>
            <a href="./reviews/delete/{{$review['id']}}" class="btn btn-danger">Delete</a>
        </div>
    </div>
    @endforeach
</div>
@endsection