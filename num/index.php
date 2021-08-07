<!doctype html>
<html lang="en">
<html>
    <head>
        <title>Numeric</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
        <link rel="apple-touch-icon" type="image/png" href="static/numeric.png">
        <link rel="icon" sizes="192x192" type="image/png" href="static/numeric.png">
        <script type="text/javascript" src="static/math.js" async defer></script>
        <script type="text/javascript" src="static/script.js?v=1" async defer></script>
        <link rel="stylesheet" type="text/css" href="static/style.css?v=2">
    </head>
    <body>
        <div class="buttons">
            <a target="_blank" href="https://mathjs.org/docs/expressions/syntax.html">?</a>
        </div>
        <div class="left">
            <textarea rows=1 cols=80 autofocus
                oninput="expand(this)" onkeyup="mathEval(this)"
                placeholder="Calculate"></textarea>
        </div>
        <div class="right">
            <div id="response"></div>
        </div>
    </body>
</html>
