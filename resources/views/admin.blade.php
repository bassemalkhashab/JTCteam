@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Dashboard</h1>
    <div id="admin-service" class="d-flex flex-wrap">
        @foreach($data['customersInfo'] as $key=>$value)
            <div class="card m-auto my-2 {{$value['read'] != true ? 'border border-primary': ''}}" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"><Strong>{{$value['fname']}} {{$value['lname']}}</Strong></h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{$value['category']}}</h6>
                    <p class="card-text"> Phone: <em>{{$value['phone']}}</em> </p>
                    <p class="card-text">Email: <em> {{$value['email']}}</em></p>
                    <p class="card-text">Address1: <em>{{$value['address1']}}</em> </p>
                    <p class="card-text">Address2: <em>{{$value['address2']}}</em> </p>
                    <p class="card-text">Postal code: <em>{{$value['zipcode']}}</em> </p>
                    <p class="card-text">Unit number: <em>{{$value['unit']}}</em> </p>
                    <p class="card-text">date sent (dd-mm-yyyy): <em>{{date('d-m-20y',strtotime($value['created_at']))}}</em> </p>
                    <p class="card-text">Time sent (hh:mm:ss): <em>{{date('h:m:s',strtotime($value['created_at']))}}</em> </p>
                    @if($value['list'] !='null')         
                        <p> Service: Clothes</p>
                        @foreach(json_decode($value['list']) as $index => $val)
                            <span class="badge bg-secondary">{{$val->cloth}} x {{$val->amount}}</span>
                        @endforeach
                    @else
                        <p> Service: {{$value['service']}}</p>
                    @endif 
                    <br>
                    <br>
                    
                    <a href="/admin/service/{{$value['id']}}/{{$value['read'] != true?'mark':'unmark'}}"><button type="button" class="btn btn-{{$value['read'] != true?'primary':'light'}}">Mark as {{$value['read'] != true?'read':'unread'}}</button></a>
                    <a href="/admin/service/{{$value['id']}}/delete"><button type="button" class="btn btn-danger">Delete</button></a>
                </div>
            </div>
	
        @endforeach
    </div>
    
</div>
@endsection
