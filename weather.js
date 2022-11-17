#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";


const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token);
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

};

initCLI();
