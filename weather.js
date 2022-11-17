#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printHelp, printSuccess, printError, printWeather } from "./services/log.service.js";
import { getCity, getJSON, saveKeyValue, TOKEN_LIST } from "./services/storage.service.js";


const saveToken = async (token) => {
    if (!token.length) return printError('Не передан token');
    
    try {
        await saveKeyValue(TOKEN_LIST.token, token);
        printSuccess("Токен сохранен");
    } catch (e) {
        printError(e.message)
    }
}
const saveCity = async (city) => {
    if (!city.length) return printError('Не передан город');
    
    try {
        await saveKeyValue(TOKEN_LIST.city, city);
        printSuccess("Город сохранен");
    } catch (e) {
        printError(e.message)
    }
}

const getForcast = async () => {
    try {
        const weather = await getWeather(await getCity());
        printWeather(weather); // Красивый вывод погоды
    } catch (e) {
        if (e?.response?.status === 404) {
            printError('Неверно указан город');
        } else if (e?.response?.status === 401) {
            printError('Неверно указан токен');
        } else {
            printError(e.message);
        }
    }
};
const see = async () => {
    const res = await getJSON();
    console.log(res);
}
const initCLI = () => {
    const args = getArgs(process.argv);
    // console.log(args);
    if (args.h) return printHelp();
    if (args.t) return saveToken(args.t);
    if (args.c) return saveCity(args.c);
    if (args.l) return see();
    return getForcast();
};

initCLI();
