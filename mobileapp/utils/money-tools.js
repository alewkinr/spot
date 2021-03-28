/**
 * Конвертирует пользовательское значение в формат
 * отображения числа для региона `ru-RU`.
 *
 * @example
 * 123123123 => 123 123 123
 */
function convertToFormat(value, limit = 1000000) {
    const normilizedValue = normilize(value.toString(), limit);
    const formatter = new Intl.NumberFormat("ru");

    const format = formatter.format(normilizedValue);

    return format === "не число" ? "" : format;
}

/**
 * Нормализует значение и приводит к числу.
 */
function normilize(value, limit = 10000000000) {
    const MAX_LIMIT = limit;

    if (!value) {
        return 0;
    }

    const clearValue = value.replace(/[^\d+,\.]/gm, "");
    let number = Number.parseInt(clearValue);

    if (MAX_LIMIT > 0 && number > MAX_LIMIT) {
        number = MAX_LIMIT;
    }

    return number;
}

// customParseInt - враппер для parseInt
function customParseInt(value) {
    let res = Number.parseInt(value, 10);
    if (isNaN(res)) {
        return 0;
    }
    return res;
}

export { convertToFormat, customParseInt };
