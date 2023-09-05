/**
 * factory for media DOM elements
 * @param {Array} data
 * @property {function} getMediasDOM
 */
function mediaTemplate(data) {
  // photographer's data
  const { name, id } = data[0]
  // media's data
  const [{ title, image, likes, date, price }] = data[1]

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

  // Get dynamic name for form title
  getFormNameTitle(name)
  // recup form's value
  getFormValues()
  // get and display infos ticket
  getSumOf(data, price, likes)
  // filter menu element
  getDropDownMenu()

  // Filter menu sort
  const selectedFilter = document.querySelector(".selected")
  const pictures = document.querySelectorAll(".media-picture")
  console.log(selectedFilter.textContent)

  selectedFilter.textContent == "Popularité"
    ? data[1].sort((a, b) => {
        a.likes - b.likes
      })
    : null

  // switch (selectedFilter) {
  //   case 'Popularité':
  //     selectedFilter.textContent == "Popularité" ? data[1].sort((a, b) => {a.likes - b.likes}) : null
  //     break;
  //   case 'Date':
  //     selectedFilter.textContent == "Date" ? data[1].sort((a, b) => {a.date - b.date}) : null
  //   break
  //   case 'Titre':
  //     selectedFilter.textContent == "Titre" ? data[1].sort((a, b) => {a.title - b.title}) : null
  //     break;
  //   default:

  // display media dom element via this template
  data[1].forEach((media) => {
    article = getMediasDOM(media)
    mediaContainer.appendChild(article)
  })

  /**
   *
   * photographer's page media DOM element creation
   * @returns {HTMLDivElement}
   */
  function getMediasDOM(media) {
    const article = document.createElement("article")
    const imageligthBoxLink = document.createElement("a")
    const img = document.createElement("img")
    const video = document.createElement("video")
    const infosMedia = document.createElement("div")

    video.setAttribute("class", "media-video")
    imageligthBoxLink.setAttribute("class", "media-link")
    imageligthBoxLink.setAttribute("href", " ")
    article.setAttribute("class", "media-article")
    infosMedia.setAttribute("class", "infos-media")

    img.setAttribute("class", "media-picture")
    img.setAttribute("alt", media.title)
    const photoTitle = document.createElement("p")
    photoTitle.textContent = media.title
    photoTitle.setAttribute("class", "media-photo-title")

    // Display images or videos
    const mediaVideo = `assets/images/${photoByFolderName}/${media.video}`
    const mediaPhoto = `assets/images/${photoByFolderName}/${media.image}`
    const hasImageProperty = media.hasOwnProperty("image")
    const hasVideoProperty = media.hasOwnProperty("video")

    if (hasImageProperty) {
      img.setAttribute("src", mediaPhoto)
    } else if (hasVideoProperty) {
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

    //////////////////////////////////////////
    // Execute lightbox
    //////////////////////////////////////////
    img.addEventListener("click", (e) => {
      e.preventDefault()
      const lightBoxInit = new Lightbox(data, index, mediaPhoto, media.title)
    })

    // Get current index image

    const indexLogic = (element) => (element = media)
    const index = data[1].findIndex(indexLogic)
    // console.log(index)

    //console.log(data[1].indexOf(data[1][0].image))

    //console.log(media.findIndex(mediaPhoto))

    // Add Likes on media card ticket infos
    const likes = document.createElement("p")
    likes.classList.add("likes")
    likes.textContent = media.likes + " " + "❤️"
    allLikes = media.likes
    likes.addEventListener("click", () => {
      allLikes.value++
    })

    // likes or dislikes
    let currentNumber = media.likes
    //let isIncreased = true
    likes.addEventListener("click", () => {
      //let decrement = (likes.textContent = currentNumber - 1 + " " + "❤️")
      let increment = (likes.textContent = currentNumber + 1 + " " + "❤️")
    })

    imageligthBoxLink.appendChild(img)
    article.appendChild(imageligthBoxLink)
    infosMedia.appendChild(photoTitle)
    article.appendChild(infosMedia)
    infosMedia.appendChild(likes)

    return article
  }
  return { getMediasDOM }
}

/**
 * count the sum of likes and add it to ticket's infos
 * @param {Object} media
 */
function getSumOf(data, likes) {
  // total of likes an price display onpage's text ticket
  const ticketInfos = document.createElement("div")
  ticketInfos.setAttribute("class", "infos-ticket")

  let pricePerday = 0
  let sumOfLikes = 0

  data[1].forEach(() => {
    sumOfLikes += likes
  })
  pricePerday += data[0].price

  ticketInfos.innerHTML +=
    sumOfLikes + " " + "❤️" + "&emsp;" + "&emsp;" + "&emsp;" + "&emsp;"
  ticketInfos.innerHTML += pricePerday + "€" + "&nbsp;" + "/" + " " + "jour"

  const photographerMain = document.querySelector(".photographer-main")
  photographerMain.appendChild(ticketInfos)
}
