function expand(element, height=0) {
    element.style.height = 'auto';
    element.style.height = (element.scrollHeight - height) + 'px';
}

function mathEval(element) {
    const parser = math.parser();
    var content = element.value;
    var splitLines = content.split(/\r?\n/);
    var resultLines = Array();
    splitLines.forEach(line => {
        try {
            result = parser.evaluate(line.trim());
        }
        catch(err) {
            result = err.message;
        }
        resultLines.push(result);
    });
    var response = document.getElementById('response');
    response.innerHTML = "<p>" + resultLines.join('</p>\n<p>') + "</p>";
}
