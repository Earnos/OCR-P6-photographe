/**
 * factory for media DOM elements
 * @param {Array} data
 * @property {function} getMediasDOM
 */
function mediaTemplate(data) {
  // photographer's data
  const { name } = data[0]
  // media's data
  const [{ likes, price }] = data[1]

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

  // Close modal form by press Escape
  closeModalWithEscape()
  // Get dynamic name for form title
  getFormNameTitle(name)
  // recup form's value
  getFormValues()
  // get and display infos ticket
  getSumOf(data, price, likes)
  // filter menu element
  getDropDownMenu(data[1], getMediasDOM)
  // Firlter sort function
  sortBy(data[1])

  // display media photo/video dom's element via this template
  data[1].forEach((media) => {
    article = getMediasDOM(media)
    mediaContainer.appendChild(article)
  })

  /**
   * photographer's page media DOM element creation
   * @returns {HTMLDivElement}
   */
  function getMediasDOM(media) {
    const article = document.createElement("article")
    const imageligthBoxContainer = document.createElement("span")
    const img = document.createElement("img")
    const video = document.createElement("video")
    const infosMedia = document.createElement("div")

    img.setAttribute("tabindex", "0")
    video.setAttribute("class", "media-video")
    imageligthBoxContainer.setAttribute("class", "img-span")
    article.setAttribute("class", "media-article")
    infosMedia.setAttribute("class", "infos-media")

    img.setAttribute("class", "media-picture")
    img.setAttribute("alt", media.title)
    const photoTitle = document.createElement("p")
    photoTitle.textContent = media.title
    photoTitle.setAttribute("class", "media-photo-title")
    imageligthBoxContainer.appendChild(img)

    // Display images or videos in DOM
    const mediaVideo = `assets/images/${photoByFolderName}/${media.video}`
    const mediaPhoto = `assets/images/${photoByFolderName}/${media.image}`
    const hasImageProperty = media.hasOwnProperty("image")
    const hasVideoProperty = media.hasOwnProperty("video")

    if (hasImageProperty) {
      img.setAttribute("src", mediaPhoto)
    } else if (hasVideoProperty) {
      video.src = mediaVideo
      video.pause()
      video.setAttribute("type", "video/mp4")
      video.preload = "auto"
      video.autoplay = false
      video.controls = true
      video.muted = false
      imageligthBoxContainer.removeChild(img)
      imageligthBoxContainer.appendChild(video)
      imageligthBoxContainer.style.cursor = "default"
      imageligthBoxContainer.removeAttribute("href")
    } else {
      return null
    }

    // Execute lightbox
    //=================
    img.addEventListener("click", (e) => {
      e.preventDefault()
      //Compare html dom tag element img's index with current element
      const currentElement = e.target
      let mediaElements =
        currentElement.parentElement.parentElement.parentElement
      let currentImgIndex = null
      Array.from(mediaElements.children).forEach((p, index) => {
        // if src == currentElement.src get index
        if (p.firstChild.firstChild.src == currentElement.src) {
          currentImgIndex = index
        }
      })
      const lightBoxInit = new Lightbox(
        data,
        currentImgIndex,
        mediaPhoto,
        media.title
      )
    })

    // open lightbox with Enter key
    img.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        console.log("enter press !")
        e.target.click()
      }
    })

    // Add Likes on media card ticket infos
    const likes = document.createElement("p")
    likes.classList.add("likes")
    likes.textContent = media.likes + " " + "❤️"
    allLikes = media.likes
    likes.addEventListener("click", () => {
      allLikes.value++
    })

    // incremental like
    let currentNumber = media.likes
    likes.addEventListener("click", () => {
      let increment = (likes.textContent = currentNumber + 1 + " " + "❤️")
    })

    article.appendChild(imageligthBoxContainer)
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

/**
 * sort function for media dropdown menu
 * @param {array} dataToSort
 * @returns {array}
 */
function sortBy(dataToSort, typeSort) {
  if (typeSort == undefined) {
    return dataToSort
  }
  let dataSorted

  switch (typeSort) {
    case "Popularité":
      dataSorted = dataToSort.sort((a, b) => {
        return b.likes - a.likes
      })
      break
    case "Date":
      dataSorted = dataToSort.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
      break
    case "Titre":
      dataSorted = dataToSort.sort((a, b) => {
        //return a.title - b.title
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      })
      break
    default:
  }
  console.log(dataSorted)

  return dataSorted
}
