import axios from 'axios';
import { TOKEN_LIST, getKeyValue } from './storage.service.js';
import dedent from 'dedent-js';

export const getIcon = (icon) => {
    switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
}


export const getWeather = async (city) => {
    const token = process.env.NODE_ENV ?? await getKeyValue(TOKEN_LIST.token);
    if (!token) throw new Error(
        dedent`Не задан API ключ, задайте его через команду -t [API_KEY]
        Если у вас нет API ключа, то его можно получить на сайте https://openweathermap.org/`
    );

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    });
    return data;
};
