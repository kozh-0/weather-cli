# CLI погоды 🌞
Чтобы начать скачайте пакеты, с помощью git clone, либо через архив.
Для использования вам нужно получить API ключ с [OpenWeather](https://openweathermap.org/).

CLI добавляет JSON файл в домашнюю директорию и хранит там заданные параметры, такие как город и API ключ (токен).

Установка пакета ``` npm i -g weather-cli-kozh-0 ```
Дальнейшее общение с CLI происходит через команту ✨weather✨

Флаги: 
```sh
Без параметров - вывод погоды
-s [CITY] для установки города
-h для вывода помощи
-t [API_KEY] для сохранения токена
-l просмотр файла настроек JSON 
```

Ошибки обработаны, иконки погоды динамичны, опционально можно использовать NODE_ENV переменную для указания токена перед исполнением утилиты.

## Пакет публичен на [npm](https://www.npmjs.com/package/weather-cli-kozh-0) | [GitHub](https://github.com/kozh-0/weather-cli)