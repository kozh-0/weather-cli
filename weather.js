#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue, TOKEN_LIST } from "./services/storage.service.js";


const saveToken = async (token) => {
    if (!token.length) {
        printError('Не передан token');
        return;
    }
    try {
        await saveKeyValue(TOKEN_LIST.token, token);
        printSuccess("Токен сохранен");
    } catch (e) {
        printError(e.message)
    }
}

const initCLI = () => {
    const args = getArgs(process.argv);
    // console.log(args);

    // Вывести help
    if (args.h) printHelp();

    // Сохранить город
    if (args.s) {  }

    // Сохранить токен
    if (args.t) return saveToken(args.t);

    // вывести погоду
    getWeather('moscow');

};

initCLI();
