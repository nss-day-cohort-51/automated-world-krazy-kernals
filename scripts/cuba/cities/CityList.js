//CityList renders individual city objects as html



import { getCity } from "./CityDataProvider.js";
import { City } from "./City.js";

export const CityList = () => {
    const getCities = getCity();
    addCityToDOM(getCities);
}

export const addCityToDOM =(arrayOfCities) => {

    const contentElement = document.querySelector(".country__detail-block");
// Add to the existing HTML in the content element contentElement
    let cityHTMLRepresentation = "";
    for (const oneCity of arrayOfCities) {
      cityHTMLRepresentation += City(oneCity);
      }
// Add to the existing HTML in the content element
      contentElement.innerHTML += ` ${cityHTMLRepresentation}`;
}