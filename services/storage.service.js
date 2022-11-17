// сохраняем и город и токен, если есть обновит, если нет создаст
import { homedir } from 'os';
import { join } from 'path';
// промис методы, позволяющие взаимодействовать с файлами, соврмеенный метод
import { promises, access, constants } from 'fs';

const filePath = join(homedir(), 'weather-data.json');

const TOKEN_LIST = {
    token: 'token',
    city: 'city'
};

const saveKeyValue = async (key, value) => {
    access(filePath, constants.F_OK, async (err) => {
        // console.log(`${filePath} ${err ? 'does not exist' : 'exists'}`);
        if (!err) {
            const file = await promises.readFile(filePath).then(res => JSON.parse(res));
            console.log(file);
            file[key] = value;
            await promises.writeFile(filePath, JSON.stringify(file));
        } else {
            let data = {};
            data[key] = value;
            await promises.writeFile(filePath, JSON.stringify(data));
        }
    });
};

const getKeyValue = async (key) => {
    try {
        const file = await promises.readFile(filePath);
        const data = JSON.parse(file);
        return data[key];
    } catch (e) {
        console.error("Файла настроек не существует");
    }
};
const getCity = async () => await promises.readFile(filePath).then(res => JSON.parse(res).city);

export { saveKeyValue, getKeyValue, TOKEN_LIST, getCity };

