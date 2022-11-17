// красивый вывод в консоль
import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (err) => {
    console.log(chalk.bgRed(" ERROR: ") + ` ${err}`);
};

const printSuccess = (msg) => {
    console.log(chalk.bgGreen(" SUCCESS: ") + ` ${msg}`);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP: ')} 
        Без параметров - вывод погоды 
        -s [CITY] для установки города
        -h для вывыода помощи
        -t [API_KEY] для сохранения токена
        `
    );
}

export { printError, printSuccess, printHelp };