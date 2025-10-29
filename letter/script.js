window.onload = function() {
    document.getElementById('template').onchange = generateLetter;
    document.getElementById('description').onchange = generateLetter;
    document.getElementById('copy').onclick = copyResult;
    document.getElementById('paste').onclick = pasteDescription;

    loadData();
    generateLetter();
};

function generateLetter() {
    document.getElementById('result').value = parse(
        document.getElementById('template').value,
        document.getElementById('description').value.toLowerCase(),
    );

    saveData();
}

function parse(template, description) {
    let result = [];
    const lines = template.split(/\r?\n/);

    for (let i = 0; i < lines.length; i++) {

        if (lines[i].startsWith('?')) {
            let line = processTemplateLine(lines[i], description);
            if (line !== undefined) {
                result.push(line);
            }
        } else {
            result.push(lines[i]);
        }
    }

    return result.join('\n');
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

async function pasteDescription() {
    document.getElementById('description').value = await navigator.clipboard.readText();
    generateLetter();
}

function loadData() {
    document.getElementById('template').value = localStorage.getItem('template');
    document.getElementById('description').value = localStorage.getItem('description');
}

function saveData() {
    localStorage.setItem('template', document.getElementById('template').value);
    localStorage.setItem('description', document.getElementById('description').value);
}