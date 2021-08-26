
import { getCelebrity } from "./CelebritiesDataProvider.js"
import { Celebrity } from "./Celebrity.js"

export const CelebrityList = () => {
    const getCelebrities = getCelebrity();
    addCelebrityToDOM(getCelebrities);

    }
    export const addCelebrityToDOM = (arrayOfCelebrities) => {

        //Get a reference to the article class
        const contentElement = document.querySelector(".celebrity__detail-block");
    
        let celebrityHTMLRepresentation = "";
        for (const oneCelebrity of arrayOfCelebrities) {
            celebrityHTMLRepresentation += Celebrity(oneCelebrity)
        }

        //Add to the existing HTML in the content element
    contentElement.innerHTML += `${celebrityHTMLRepresentation}`;

    } 