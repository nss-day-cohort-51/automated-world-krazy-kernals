/**
 *  CityList renders individual city objects as HTML
 */

import { getCity } from "./CityDataProvider.js";
import { City } from "./City.js";

export const CityList = () => {
  const getCities = getCity();
  addCityToDOM(getCities);
};

export const addCityToDOM = (arrayOfCities) => {
  // Get a reference to the <article class="city__detail-block"> element
  const contentElement = document.querySelector(".city__detail-block");

  // Add to the existing HTML in the content element contentElement
  let cityHTMLRepresentation = "";
  for (const oneCity of arrayOfCities) {
    cityHTMLRepresentation += City(oneCity);
  }

  // Add to the existing HTML in the content element
  contentElement.innerHTML += ` ${cityHTMLRepresentation}`;
};
