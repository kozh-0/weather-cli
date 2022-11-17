// сохраняем и город и токен, если есть обновит, если нет создаст
import { homedir } from 'os';
import { join } from 'path';
// промис методы, позволяющие взаимодействовать с файлами, соврмеенный метод
import { promises, access, constants } from 'fs';

const filePath = join(homedir(), 'weather-data.json');

const saveKeyValue = async (key, value) => {
    let data = {};
    access(filePath, constants.F_OK, async (err) => {
        // console.log(`${filePath} ${err ? 'does not exist' : 'exists'}`);
        if (!err) {
            const file = await promises.readFile(filePath);
            data = JSON.parse(file);
        } 
    });
    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data));
    console.log(JSON.stringify(data));
};

const getKeyValue = async (key) => {
    access(filePath, constants.F_OK, async (err) => {
        if (!err) {
            const file = await promises.readFile(filePath);
            const data = JSON.parse(file);
            return data[key];
        }
        return undefined;
    });
};

export { saveKeyValue, getKeyValue };

