import axios from 'axios';
import { TOKEN_LIST, getKeyValue } from './storage.service.js';

export const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_LIST.token);
    if (token) throw new Error(
        `Не задан API ключ, задайте его через команду -t [API_KEY]
        Его можно получить на сайте https://openweathermap.org/`
    );

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    });
    console.log(data);
};
