window.onload = function() {
    document.getElementById('template').onchange = change;
    document.getElementById('description').onchange = change;
    document.getElementById('copy').onclick = copyResult;
};

function change() {
    document.getElementById('result').value = parse(
        document.getElementById('template').value,
        document.getElementById('description').value.toLowerCase(),
    );
}

function parse(template, description) {
    let result = '';
    const tplLines = template.split(/\r?\n/);

    for (let i = 0; i < tplLines.length; i++) {
        if (tplLines[i].startsWith('*')) {
            result += processTemplateLine(tplLines[i], description);
        } else {
            result += tplLines[i] + '\r\n';
        }
    }

    return result;
}

function processTemplateLine(line, description) {
    let parts = line.substr(1).split(':');
    let keysString = parts[0];
    let lineResult = parts[1];
    let keys = keysString.toLowerCase().split('|');

    for (let i = 0; i < keys.length; i++) {
        if (description.includes(keys[i])) {
            return lineResult + '\r\n';
        }
    }

    return '';
}

function copyResult() {
    let input = document.getElementById('hidden');
    // input.value = document.getElementById('result').value;
    // input.select();
    // input.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(document.getElementById('result').value)
}