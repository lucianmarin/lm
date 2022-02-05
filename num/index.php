<!doctype html>
<html lang="en">
<head>
    <title>Numeric</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" type="image/png" href="static/num.png">
    <link rel="icon" sizes="192x192" type="image/png" href="static/num.png">
	<link rel="manifest" type="application/json" href="static/manifest.json">
    <script type="text/javascript" src="static/math.js"></script>
    <script type="text/javascript" src="static/script.js?v=2"></script>
    <link rel="stylesheet" type="text/css" href="static/style.css?v=6">
</head>
<body onload="load()">
    <div class="help">
        <a target="_blank" href="https://mathjs.org/docs/expressions/syntax.html">?</a>
    </div>
    <div class="container">
        <div class="left">
            <textarea id="content" rows=1 cols=80 autofocus
                oninput="eval(this)" placeholder="Calculate"></textarea>
        </div>
        <div class="right">
            <div id="response"></div>
        </div>
    </div>
</body>
</html>
