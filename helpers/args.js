const getArgs = (args) => {
    const res = {};
    const [executer, file, ...rest] = args;

    rest.forEach((el, i, arr) => {
        // Если встретили что-то начинающееся с дефиса, начинаем действовать
        if (el.charAt(0) === '-') {
            // если последний элемент
            if (i === arr.length - 1) {
                // убираем первую букву, то есть "-", и флагу присваиваем true
                res[el.substring(1)] = true;
                // если параметр без дефиса, то присваиваем
            } else if (arr[i + 1].charAt(0) !== '-') {
                res[el.substring(1)] = arr[i + 1]
                // если параметр
            } else {
                res[el.substring(1)] = true;
            }
        }
    });
    // console.log(res);
    return res;

};

export { getArgs };