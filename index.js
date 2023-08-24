const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');


// Questions for the user
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters for your logo text:',
        validate: input => input.length <= 3 || "Your input exceeds three characters!"
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword or a hexadecimal number for text:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword or a hexadecimal number for shape:',
    }
];
function writeToFile(fileName, data) {
    const dir = './examples';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    const outputPath = `./examples/${fileName}`;

    let writeError;

    try {
        fs.writeFileSync(outputPath, data);
    } catch (err) {
        writeError = err;
    }

    writeError ? console.error(writeError) : console.log(`Your ${fileName} file has been created in the examples folder!`);
}
// Prompt the user and generate the SVG
inquirer.prompt(questions).then(answers => {
    let shape;
    switch (answers.shape) {
        case 'circle':
            shape = new Circle();
            break;
        case 'triangle':
            shape = new Triangle();
            break;
        case 'square':
            shape = new Square();
            break;
    }

    shape.setColor(answers.shapeColor);
    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="100" font-family="Arial" font-size="24" fill="${answers.textColor}" text-anchor="middle" dominant-baseline="middle">
                ${answers.text}
            </text>
        </svg>
    `;

    function formatDateForFileName(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = String(date.getFullYear()).slice(-2); 
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
    
        return `${month}-${day}-${year}_${hours}-${minutes}-${seconds}`;
    }

const currentDate = new Date();
const formattedDate = formatDateForFileName(currentDate);
const fileName = `logo_${formattedDate}.svg`;
writeToFile(fileName, svgContent);

});





