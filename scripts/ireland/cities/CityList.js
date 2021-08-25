import { getCity } from "./CityDataProvider.js";

import { City } from "./City.js";

export const CityList = () => {
    const getCities = getCity();
    addCityToDOM(getCities);
}

export const addCityToDOM = (arrayOfCities) => {
    const contentElement = document.querySelector(".city__detail-block");

    let cityHTMLRepresentation = "";
    for (const oneCity of arrayOfCities) {
        cityHTMLRepresentation += City(oneCity);
    }

    contentElement.innerHTML += `${cityHTMLRepresentation}`;
}