@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Dashboard</h1>
    <div class="dropdown">
    <a href="/admin/services/{{explode('/',url()->current())[count(explode('/',url()->current()))-1]}}/new">
      <button class="btn btn-success">
        New service
      </button>
    </a> 
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {{explode('/',url()->current())[count(explode('/',url()->current()))-1]}}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="/admin/services/clothes">Clothes</a></li>
    <li><a class="dropdown-item" href="/admin/services/residential">Residential</a></li>
    <li><a class="dropdown-item" href="/admin/services/commercial">Commercial</a></li>
  </ul>
</div>

<div class="d-flex flex-wrap">

  @foreach($Services as $key => $service)
    <div class="card m-2" style="width: 18rem;">
      <img src="/storage/{{$service['image']}}" class="card-img-top" alt="{{$service['image']}}">
      <div class="card-body">
        <h5 class="card-title">{{$service['header']}}</h5>
        <p class="card-text">
          @if($service['category'] == 'clothes')
            ${{$service['price']}}
          @else
            {{$service['description']}}
          @endif
        </p>
        <a href="./{{$service['category']}}/edit/{{$service['id']}}" class="btn btn-secondary">Edit</a>
        <a href="./{{$service['category']}}/delete/{{$service['id']}}" class="btn btn-danger">Delete</a>
      </div>
    </div>
  @endforeach
  
</div>

</div>
@endsection
