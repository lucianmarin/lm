function load() {
    element = document.getElementById("id_content");
    if (typeof(Storage) !== "undefined") {
        element.value = localStorage.content;
        eval(element);
    }
}

function eval(element) {
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
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("content", content);
    }
}
