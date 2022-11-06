@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Dashboard</h1>
    <h3 class="text-secondary">Create customer</h3>
    <form class="m-auto" style="max-width:35em;" method="post" enctype="multipart/form-data">
    @csrf
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input name="name" class="form-control" type="text" placeholder="Organization Name" aria-label="default input example" required>
        </div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Customer logo</label>
            <input name="image" class="form-control" type="file" id="formFile" required>
        </div>
        <div class="form-check form-switch my-3">
            <input class="form-check-input" name="background" value="transparent" type="checkbox" id="flexSwitchCheckDefault">
            <label  class="form-check-label" for="flexSwitchCheckDefault">Select dark background (Light background is selected by default)</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
@endsection
