/**
 *  CityList renders individual fish objects as HTML
 */

import { getCity } from "./CityDataProvider.js";

import { City } from "./City.js"

export const CityList = () => {
    const getCities = getCity();
    addCityToDOM(getCities);

    }
    export const addCityToDOM = (arrayOfCities) => {

        //Get a reference to the article class
        const contentElement = document.querySelector(".city__detail-block");
    
        let cityHTMLRepresentation = "";
        for (const oneCity of arrayOfCities) {
            cityHTMLRepresentation += City(oneCity)
        }

        //Add to the existing HTML in the content element
    contentElement.innerHTML += `${cityHTMLRepresentation}`;

    } 