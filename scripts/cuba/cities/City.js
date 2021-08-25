//This will render each city object as html

export const City = (cityObj) => {
    return `<article class="city__block">
    <ul class="city__details">
            <li class="city__name"><h4>${cityObj.name}</h4></li>
            <li class="city__population">Population: ${cityObj.population}</li>
            <li class="city__description">${cityObj.description}</li>
            <li class="city__website"><a href="${cityObj.website}" target=_blank">Visit Website</a><li>
        
        </ul>
</article>`
}