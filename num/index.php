<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Multiline math calculator.">
	<meta name="keywords" content="math, calculator, excel, spreadsheet">
	<meta name="author" content="Lucian Marin">
	<meta property="og:image" content="static/num.png">
	<meta name="twitter:image" content="static/num.png">
	<title>Num</title>
	<link rel="apple-touch-icon" type="image/png" href="static/num.png">
	<link rel="icon" sizes="192x192" type="image/png" href="static/num.png">
	<link rel="manifest" type="application/json" href="static/manifest.json">
	<link rel="stylesheet" type="text/css" href="static/style.css?v=10">
	<script type="text/javascript" src="static/math.js"></script>
	<script type="text/javascript" src="static/script.js?v=4"></script>
</head>
<body onload="load()">
	<div class="help">
		<a target="_blank" href="https://mathjs.org/docs/expressions/syntax.html">?</a>
	</div>
	<div class="container">
		<div class="left">
			<textarea id="content" rows=1 cols=80 autofocus
				oninput="calc(this)" placeholder="Calculate"></textarea>
		</div>
		<div class="right">
			<div id="response"></div>
		</div>
	</div>
</body>
</html>
