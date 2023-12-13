<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>

  <link rel="stylesheet" href="@yield('css')">
  <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

  @vite('resources/css/app.css')

</head>
<body>
  
  @include('partials.navbar')

  <div class="mt-4">
    @yield('containers')
  </div>

</body>
</html>