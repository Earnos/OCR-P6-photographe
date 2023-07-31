function mediaTemplate(data) {
  const { title, image, likes, date, price } = data[1]
  const { name, id } = data[0]
  console.log(data)
  // transform photographer's name same as photo name's folders
  const arr = name
  const splitName = arr.split(" ")
  splitName.pop()
  const folderName = splitName.join(" ")
  photoByFolderName = folderName.replaceAll("-", " ")

  const getPictures = data.filter((datas) => {
    if (datas.photographerId === id) {
      return (d = datas)
    }
  })
  console.log(getPictures)

  const mediaPhoto = `assets/images/${photoByFolderName}/${image}`
  console.log(mediaPhoto)

  /**
   * photographer's page media DOM element creation
   * @returns {HTMLDivElement}
   */
  function getMediasDOM() {
    const photosContainer = document.querySelector(".main")
    const section = document.createElement("div")
    const imageligthBoxLink = document.createElement("a")
    const img = document.createElement("img")

    img.setAttribute("src", mediaPhoto)
    img.setAttribute("alt", title)

    const h2 = document.createElement("h2")
    h2.textContent = title
    const priceByDay = document.createElement("p")
    priceByDay.textContent = price + "€/jour"

    imageligthBoxLink.appendChild(img)
    section.appendChild(imageligthBoxLink)
    photosContainer.appendChild(section)

    return section
  }
  // name & picture inutile ?
  return { getMediasDOM }
}
