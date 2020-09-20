<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{ config('app.name') }}</title>

  <!-- Scripts -->
  <script src="{{ mix('js/app.js') }}" defer></script>

  <!-- Fonts -->
  <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

  <!-- reset -->
  <link rel="stylesheet" type="text/css" href="css/reset.css">

  <!-- Styles -->
  <link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body>
  <div id="app"></div>
</body>
</html>
