function mediaTemplate(data) {
  const { name, portrait, city, country, tagline, price, id } = data

  const picture = `assets/photographers/${portrait}`

  function getMediasDOM() {
    //   const article = document.createElement("article")
    //   const img = document.createElement("img")
    //   img.setAttribute("src", picture)
    //   img.setAttribute("alt", name)
    //   const h2 = document.createElement("h2")
    //   h2.textContent = name

    //   // temporary JSON's other data
    //   const locality = document.createElement("h3")
    //   locality.textContent = city + "," + " " + country
    //   const description = document.createElement("p")
    //   description.textContent = tagline
    //   const priceByDay = document.createElement("p")
    //   priceByDay.textContent = price + "€/jour"

    //   // create photographer's link
    //   const photoLink = document.createElement("a")
    //   photoLink.setAttribute("href", `photographer.html?photographer-id=${id}`)
    //   //photoLink.id = `${id}`
    //   photoLink.appendChild(img)
    //   photoLink.appendChild(h2)

    //   article.appendChild(photoLink)
    //   article.appendChild(locality)
    //   article.appendChild(description)
    //   article.appendChild(priceByDay)

    return
  }
  // name & picture inutile ?
  return { name, picture, getMediasDOM }
}
