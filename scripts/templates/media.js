function mediaTemplate(data) {
  // photographer's data
  const { name, id } = data[0]
  // media's data
  // const { title, image, likes, date, price } = data[1]

  // transform photographer's name same as photo name's folders
  const arr = name
  const splitName = arr.split(" ")
  splitName.pop()
  const folderName = splitName.join(" ")
  photoByFolderName = folderName.replaceAll("-", " ")

  let article
  const photosContainer = document.querySelector("#main")
  const mediaContainer = document.createElement("div")
  mediaContainer.setAttribute("id", "media-container")
  photosContainer.appendChild(mediaContainer)

  data[1].forEach((media) => {
    article = getMediasDOM(media)
    mediaContainer.appendChild(article)
  })

  /**
   * photographer's page media DOM element creation
   * @returns {HTMLDivElement}
   */
  function getMediasDOM(media) {
    //console.log(media)
    const article = document.createElement("article")
    const imageligthBoxLink = document.createElement("a")
    const img = document.createElement("img")
    const infosMedia = document.createElement("div")

    article.setAttribute("class", "media-article")
    infosMedia.setAttribute("class", "infos-media")

    const mediaPhoto = `assets/images/${photoByFolderName}/${media.image}`
    img.setAttribute("class", "media-picture")
    img.setAttribute("src", mediaPhoto)
    img.setAttribute("alt", media.title)

    const photoTitle = document.createElement("p")
    photoTitle.textContent = media.title
    photoTitle.setAttribute("class", "media-photo-title")

    const likes = document.createElement("p")
    heartEmoji = "U+2764 U+fe0f"
    likes.textContent = media.likes + " " + "❤️"

    imageligthBoxLink.appendChild(img)
    article.appendChild(imageligthBoxLink)
    infosMedia.appendChild(photoTitle)
    article.appendChild(infosMedia)
    infosMedia.appendChild(likes)

    return article
  }
  return { getMediasDOM }
}
