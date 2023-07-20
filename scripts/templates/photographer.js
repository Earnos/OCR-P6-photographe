function photographerTemplate(data) {
  const { name, portrait, city, country, tagline, price, id } = data

  const picture = `assets/photographers/${portrait}`

  function getUserCardDOM() {
    const article = document.createElement("article")
    const img = document.createElement("img")
    img.setAttribute("src", picture)
    img.setAttribute("alt", name)
    const h2 = document.createElement("h2")
    h2.textContent = name

    // temporary JSON's other data
    const locality = document.createElement("h3")
    locality.textContent = city + "," + " " + country
    const description = document.createElement("p")
    description.textContent = tagline
    const priceByDay = document.createElement("p")
    priceByDay.textContent = price + "€/jour"

    // create photographer's link
    const photoLink = document.createElement("a")
    photoLink.setAttribute("href", `photographer.html?photographer-id=${id}`)
    //photoLink.id = `${id}`
    photoLink.appendChild(img)
    photoLink.appendChild(h2)

    article.appendChild(photoLink)
    article.appendChild(locality)
    article.appendChild(description)
    article.appendChild(priceByDay)

    return article
  }
  function getPhotographHeaderDOM() {
    const photographProfil = document.querySelector(".photograph-header")
    const photographerInfoContent = document.createElement("div")

    const h2 = document.createElement("h2")
    h2.textContent = name
    console.log(photographers[0])
    const locality = document.createElement("h3")
    locality.textContent = city + "," + " " + country
    const description = document.createElement("p")
    description.textContent = tagline

    photographProfil.appendChild(photographerInfoContent)
    photographerInfoContent.appendChild(h2, locality, description)
  }
  function getUrlId() {
    urlLocation = document.location
    const urlId = new URL(urlLocation)
    const searchParams = urlId.searchParams
    searchParams.get("search")
    const ID = searchParams.get("photographer-id")
    return ID
  }

  // name & picture inutile ?
  return { name, picture, getUserCardDOM, getPhotographHeaderDOM }
}
