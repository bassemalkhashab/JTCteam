@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Dashboard</h1>
    <form class="m-auto" style="max-width: 25em ;" action="" method="post" enctype="multipart/form-data">
        @if($errors->any())
        <div class="alert alert-danger" role="alert">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
                </div>
        @else
            @if(session()->has('message'))
                <div class="alert alert-success" role="alert">
                {{ session()->get('message') }}
                </div>
            @endif
        @endif
        @csrf
        <div class="input-group mb-3">
            @if(isset($data))
                <input type="text" class="form-control" placeholder="{{$data['header']}}" aria-label="product" name="product" aria-describedby="basic-addon1" >
            @else
                <input type="text" class="form-control" placeholder="Product" aria-label="product" name="product" aria-describedby="basic-addon1" required>
            @endif
        </div>
        <div class="input-group mb-3">
            @if($category == 'clothes')
                <span class="input-group-text">$</span>
                @if(isset($data))
                    <input type="text" class="form-control" name="price" placeholder="{{$data['price']}}" aria-label="Amount (to the nearest dollar)" >
                @else
                    <input type="text" class="form-control" name="price" placeholder="price" aria-label="Amount (to the nearest dollar)" required>
                @endif  
            @else
                @if(isset($data))
                    <textarea class="form-control" name="description" placeholder="{{$data['description']}}" id="exampleFormControlTextarea1" rows="5" ></textarea>
                @else
                    <textarea class="form-control" name="description" placeholder="Description" id="exampleFormControlTextarea1" rows="3" required></textarea>
                @endif 
            @endif
        </div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Default file input example</label>
            <input class="form-control" value="image" name="image" type="file" id="formFile" >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>


</div>
@endsection