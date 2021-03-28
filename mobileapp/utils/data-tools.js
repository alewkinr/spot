// countCities — считаем кол-во городов
export const countCities = (dests) => {
    let counter = 0;
    for (let i = 0; i < dests.length; i++) {
        counter = counter + dests[i].cities.length
    }
    return counter
}

export const concatCities = (citiesArr) => {
    return citiesArr.join(", ")
}
