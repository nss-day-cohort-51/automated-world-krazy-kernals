// This will render each city object as HTML


export const City = (cityObj) => {

    return `<article class="city__block">
    <ul class="city__details"> 
        <li class="Mexico"><h4>${cityObj.name}</h4></li>
        <li class="city__population">Population: ${cityObj.population}</li>
        <li class="citizen__description">${cityObj.description}</li>
        <li class="citizen__website"><a href="${cityObj.website}" target="_blank">Visit Website</a></li>
    </ul>
</article>`
}