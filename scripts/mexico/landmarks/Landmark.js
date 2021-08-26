//This will render each landmark object as HTML

export const Landmark = (landmarkObj)=> {
    return `<article class="city__block">
    <ul class="city__details"> 
        <li class="landmark__name"><h4>${landmarkObj.name}</h4></li>
        <li class="landmark_year">Year: ${landmarkObj.yearCreated}</li>
        <li class="landmark_description">${landmarkObj.description}</li>
        <li class="landmark__website"><a href="${landmarkObj.website}" target="_blank">Visit Website</a></li>
    </ul>
</article>`
}