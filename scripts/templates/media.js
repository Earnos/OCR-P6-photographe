function mediaTemplate(data) {
  // photographer's data
  const { name, id } = data[0]
  // media's data
  const { title, image, likes, date, price } = data[1]

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
  // const headerTitle = document.querySelector(".modal  h2")

  // console.log(headerTitle)
  // headerTitle.innerHTML = "Contactez-moi" + "\n" + name

  // Get dynamic name for form title
  getFormNameTitle(name)

  // display dom element via this template
  data[1].forEach((media) => {
    article = getMediasDOM(media)
    mediaContainer.appendChild(article)
  })

  // function getPicturesOrVideo(media) {
  //   const mediaVideo = `asssets/images/${photoByFolderName}/${data[1].video}`
  //   const mediaPhoto = `assets/images/${photoByFolderName}/${data[1].image}`
  //   const img = document.createElement("img")
  //   const hasImageProperty = data[1].hasOwnProperty("image")
  //   const hasVideoProperty = data[1].hasOwnProperty("video")

  //   console.log(hasImageProperty)

  //   if (data[1].image) {
  //     img.setAttribute("src", mediaPhoto)
  //   } else {
  //     img.setAttribute("src", mediaVideo)
  //   }

  //   // hasImageProperty
  //   //   ? img.setAttribute("src", mediaPhoto)
  //   //   : img.setAttribute("src", mediaVideo)

  //   // if (hasImageProperty) {
  //   //   img.setAttribute("src", mediaPhoto)
  //   // } else if (hasVideoProperty) {
  //   //   img.setAttribute("src", mediaVideo)
  //   // } else {
  //   //   console.error("erreur de chargement des données")
  //   // }
  // }

  /**
   * photographer's page media DOM element creation
   * @returns {HTMLDivElement}
   */
  function getMediasDOM(media) {
    //console.log(media)
    const article = document.createElement("article")
    const imageligthBoxLink = document.createElement("a")
    const img = document.createElement("img")
    const video = document.createElement("video")
    const infosMedia = document.createElement("div")

    video.setAttribute("class", "media-video")
    imageligthBoxLink.setAttribute("class", "media-link")
    imageligthBoxLink.setAttribute("href", " ")
    imageligthBoxLink.setAttribute("onclick", "displayLightbox()")
    article.setAttribute("class", "media-article")
    infosMedia.setAttribute("class", "infos-media")

    const mediaVideo = `assets/images/${photoByFolderName}/${media.video}`
    const mediaPhoto = `assets/images/${photoByFolderName}/${media.image}`
    //console.log(mediaVideo)
    //console.log(mediaPhoto)
    img.setAttribute("class", "media-picture")
    //img.setAttribute("src", mediaPhoto)
    img.setAttribute("alt", media.title)
    const photoTitle = document.createElement("p")
    photoTitle.textContent = media.title
    photoTitle.setAttribute("class", "media-photo-title")

    // Display images or videos
    const hasImageProperty = media.hasOwnProperty("image")
    const hasVideoProperty = media.hasOwnProperty("video")

    if (hasImageProperty) {
      img.setAttribute("src", mediaPhoto)
    } else if (hasVideoProperty) {
      //video.setAttribute("src", mediaVideo)
      video.src = mediaVideo
      article.appendChild(video)
      video.pause()
      video.setAttribute("type", "video/mp4")
      video.preload = "auto"
      video.autoplay = false
      video.controls = true
      video.muted = false
      imageligthBoxLink.style.display = "none"
    } else {
      return null
    }

    // total of likes an price display onpage's text ticket
    const ticketInfos = document.createElement("div")
    ticketInfos.setAttribute("class", "infos-ticket")
    // const ecahLikes = media.image
    //console.log(media.likes)
    // let sum = 0
    // let likeNumbers = media.likes
    // //console.log(likeNumbers)
    // for (let number in likeNumbers) {
    //   sum += likeNumbers[number]
    // }
    // const likeNumber = Object.keys(likeNumbers)
    //console.log(likeNumber)
    // likeNumbers.map(({ likeNumbers }) => +likeNumbers)
    // console.log(sum)
    // console.log(likeNumbers)

    // console.log(media.likes)
    // let likeNumbers = media.likes
    // for (numbers in like) {
    //   let sum = 0
    //   const likeNumber = Object.keys(likeNumbers)
    //   sum += likeNumbers[number]
    // }
    // console.log(sum)

    ticketInfos.textContent += media.likes + " " + "❤️"
    ticketInfos.textContent += media.price + " " + "/" + " " + "jour"
    const photographerMain = document.querySelector(".photographer-main")
    photographerMain.appendChild(ticketInfos)

    // Likes on media card
    const likes = document.createElement("p")
    heartEmoji = "U+2764 U+fe0f"
    likes.textContent = media.likes + " " + "❤️"

    imageligthBoxLink.appendChild(img)
    article.appendChild(imageligthBoxLink)
    infosMedia.appendChild(photoTitle)
    article.appendChild(infosMedia)
    infosMedia.appendChild(likes)

    //getPicturesOrVideo(media)

    return article
  }
  return { getMediasDOM }
}
