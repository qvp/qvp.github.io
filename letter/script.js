window.onload = function() {
    document.getElementById('template').onchange = change;
    document.getElementById('description').onchange = change;
    document.getElementById('copy').onclick = copyResult;

    loadData();
    change();
};

function change() {
    document.getElementById('result').value = parse(
        document.getElementById('template').value,
        document.getElementById('description').value.toLowerCase(),
    );

    saveData();
}

function parse(template, description) {
    let result = '';
    const tplLines = template.split(/\r?\n/);

    for (let i = 0; i < tplLines.length; i++) {

        if (tplLines[i].startsWith('?')) {
            let line = processTemplateLine(tplLines[i], description);
            if (line !== undefined) {
                result += line;
            }
        } else {
            result += tplLines[i];
        }

        // Добавляем новую строку после каждой строчки кроме последней
        if ( (i + 1) < tplLines.length ) {
            result += '\r\n';
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
        let key = keys[i].trim();

        if (description.includes(key)) {
            return lineResult.trim();
        }
    }
}

function copyResult() {
    navigator.clipboard.writeText(
        document.getElementById('result').value
    );
}

function loadData() {
    document.getElementById('template').value = localStorage.getItem('template');
    document.getElementById('description').value = localStorage.getItem('description');
}

function saveData() {
    localStorage.setItem('template', document.getElementById('template').value);
    localStorage.setItem('description', document.getElementById('description').value);
}