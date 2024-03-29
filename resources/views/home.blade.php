<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ mix('css/header.css') }}"> 
    <link rel="stylesheet" href="{{ mix('css/home.css') }}"> 
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="stylesheet" href="{{ mix('css/footer.css') }}">
    <link rel="stylesheet" href="{{ mix('css/about.css') }}">
    <link rel="stylesheet" href="{{ mix('css/reviews.css') }}">
    <link rel="stylesheet" href="{{ mix('css/service.css') }}">
    <link rel="stylesheet" href="{{ mix('css/contact.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>JTCteam</title>
</head>
<body>
    <div id="root"></div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>