import { getLandmark } from "./LandmarkDataProvider.js";

import { Landmark } from "./Landmark.js";

export const LandmarkList = () => {
    const getLandmarks = getLandmark();
    addLandmarkToDOM(getLandmarks);
}

export const addLandmarkToDOM = (arrayOfLandmarks) => {
    const contentElement = document.querySelector(".landmark__detail-block");

    let landmarkHTMLRepresentation = "";
    for (const onelandmark of arrayOfLandmarks) {
        landmarkHTMLRepresentation += Landmark(onelandmark);
    }

    contentElement.innerHTML += `${landmarkHTMLRepresentation}`;
}