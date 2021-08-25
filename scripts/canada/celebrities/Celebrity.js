// This will render each celebrity object as HTML

export const Celebrity = (celebrityObj) => {
    return `<article class="citizen__block">
    <ul class="citizen__details"> 
        <li class="citizen__name"><h4>${celebrityObj.name}</h4></li>
        <li class="citizen__occupation">Occupation: ${celebrityObj.occupation}</li>
        <li class="citizen__description">${celebrityObj.description}</li>
        <li class="citizen__website"><a href="${celebrityObj.website}" target="_blank">Visit Website</a></li>
    </ul>
</article>`
}