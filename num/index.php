<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Multiline math calculator">
    <title>Num</title>
    <link rel="apple-touch-icon" type="image/png" href="static/num.png">
    <link rel="icon" sizes="192x192" type="image/png" href="static/num.png">
	<link rel="manifest" type="application/json" href="static/manifest.json">
    <link rel="stylesheet" type="text/css" href="static/style.css?v=8">
    <script type="text/javascript" src="static/math.js"></script>
    <script type="text/javascript" src="static/script.js?v=2"></script>
</head>
<body onload="load()">
    <div class="help">
        <a target="_blank" href="https://mathjs.org/docs/expressions/syntax.html">?</a>
    </div>
    <div class="container">
        <div class="left">
            <textarea id="content" rows=1 cols=80 autofocus
                oninput="eval(this)" placeholder="Evaluate"></textarea>
        </div>
        <div class="right">
            <div id="response"></div>
        </div>
    </div>
</body>
</html>
