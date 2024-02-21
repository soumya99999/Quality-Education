const fs = require('fs');
const marked = require('marked');

const markdownFile = 'temp.md';
const outputFile = 'output.js';

let html;

fs.readFile(markdownFile, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    html = marked(data);

    fs.writeFile(outputFile, `module.exports = \`${html}\`;`, (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log('Markdown file converted to JavaScript file successfully!');
    });
});