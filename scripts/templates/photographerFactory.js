function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data

  const picture = `assets/photographers/${portrait}`
  /**
   * main page photographers card
   * @returns {HTMLElement}
   */
  function getUserCardDOM() {
    const article = document.createElement("article")
    const img = document.createElement("img")
    img.setAttribute("src", picture)
    img.setAttribute("alt", `Profil's picture of ${name}`)
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
    photoLink.setAttribute("alt", name)
    photoLink.appendChild(img)
    photoLink.appendChild(h2)

    article.appendChild(photoLink)
    article.appendChild(locality)
    article.appendChild(description)
    article.appendChild(priceByDay)

    return article
  }
  /**
   * Photographer Profil Header
   * @returns {HTMLDivElement}
   */
  function getPhotographHeaderDOM() {
    const photographProfil = document.querySelector(".photograph-header")
    const photographerInfoContent = document.createElement("div")

    const h2 = document.createElement("h2")
    h2.textContent = name
    const locality = document.createElement("p")
    locality.textContent = city + "," + " " + country
    const description = document.createElement("p")
    description.textContent = tagline
    const img = document.createElement("img")
    img.setAttribute("src", picture)
    img.setAttribute("alt", `Profil's picture of ${name}`)

    photographProfil.appendChild(photographerInfoContent)
    photographerInfoContent.appendChild(h2)
    photographerInfoContent.appendChild(locality)
    photographerInfoContent.appendChild(description)
    photographProfil.appendChild(img)

    return photographerInfoContent
  }

  return { getUserCardDOM, getPhotographHeaderDOM }
}
