<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Multiline math calculator.">
	<meta name="keywords" content="math, calculator, excel, spreadsheet">
	<meta name="author" content="Lucian Marin">
	<meta property="og:image" content="/num/static/192.png">
	<meta name="twitter:image" content="/num/static/192.png">
	<title>Num</title>
	<link rel="apple-touch-icon" type="image/png" href="/num/static/192.png">
	<link rel="icon" sizes="192x192" type="image/png" href="/num/static/192.png">
	<link rel="manifest" type="application/json" href="/num/static/manifest.json">
	<link rel="stylesheet" type="text/css" href="/num/static/style.css?v=10">
	<script type="text/javascript" src="/num/static/math.js"></script>
	<script type="text/javascript" src="/num/static/script.js?v=4"></script>
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
