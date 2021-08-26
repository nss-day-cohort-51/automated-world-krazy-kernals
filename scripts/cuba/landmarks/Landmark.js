

export const Landmark = (landmarkObj)=> {
    return`<article class="landmark__block">
    <ul class="landmark__details">
        <li class="landmark__name"><h4>${landmarkObj.name}</h4></li>
         <li class="landmark__year-created">Created: ${landmarkObj.yearCreated}</li>
        <li class="landmark__description">${landmarkObj.description}</li>
        <li class="landmark__website"><a href="${landmarkObj.website}" target="_blank">Visit Website</a></li>
    </ul>
</article>`

}