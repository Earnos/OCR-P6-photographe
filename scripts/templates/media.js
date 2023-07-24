function mediaTemplate(data) {
  const { title, image, likes, date, price, photographerId, id } = data

  const mediaPhoto = `assets/images/${image}`

  function getMediasDOM() {
    const section = document.createElement("section")
    const imageligthBoxLink = document.createElement("a")
    const img = document.createElement("img")
    const main = document.getElementById("main")

    img.setAttribute("src", mediaPhoto)
    img.setAttribute("alt", title)

    const h2 = document.createElement("h2")
    h2.textContent = title
    const priceByDay = document.createElement("p")
    priceByDay.textContent = price + "€/jour"

    imageligthBoxLink.appendChild(img)
    section.appendChild(imageligthBoxLink)
    main.appendChild("section")

    return section
  }
  // name & picture inutile ?
  return { getMediasDOM }
}
