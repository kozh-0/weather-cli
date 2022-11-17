// красивый вывод в консоль
import chalk from 'chalk';
import dedent from 'dedent-js';
import { getIcon } from './api.service.js';

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
        -h для вывода помощи
        -t [API_KEY] для сохранения токена
        -l просмотр файла настроек JSON 
        `
    );
}

const printWeather = (data) => {
    console.log(
        dedent`${chalk.bgYellow(' WEATHER ')} Погода в городе ${data.name} 🌞
        ${getIcon(data.weather[0].icon)} ${data.weather[0].description[0].toUpperCase() + data.weather[0].description.substring(1)}
        🌡️ Температура: ${data.main.temp} °C (Ощущается как ${data.main.feels_like} °C)
        🌊 Влажность: ${data.main.humidity} %
        🌫️ Скорость ветра: ${data.wind.speed} м/с
        `
    );
};

export { printError, printSuccess, printHelp, printWeather };