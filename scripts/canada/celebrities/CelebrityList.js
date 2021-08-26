/**
 *  CelebrityList renders individual celebrity objects as HTML
 */

 import { Celebrity } from "./Celebrity.js";
 import { getCelebrity } from "./CelebritiesDataProvider.js"
 
 export const CelebrityList = () => {
     const getCelebrities = getCelebrity();
     addCelebrityToDOM(getCelebrities);
 }
 
 export const addCelebrityToDOM = (arrayOfCelebrities) => {
     
     // Get a reference to the <article class="country__detail-block"> element
     const contentElement = document.querySelector(".celebrity__detail-block");
 
     // Add to the existing HTML in the content element contentElement
     let celebrityHTMLRepresentation = "";
     for (const oneCelebrity of arrayOfCelebrities) {
        celebrityHTMLRepresentation += Celebrity(oneCelebrity);
     }
 
     // Add to the existing HTML in the content element
     contentElement.innerHTML += ` ${celebrityHTMLRepresentation}`;
 
 }