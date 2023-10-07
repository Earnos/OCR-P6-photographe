/**
 * @property {HTMLElement} element
 */
class Lightbox {
  constructor(data, index, url, title, video) {
    this.data = data
    console.log(data)
    this.currentIndex = index
    this.element = this.buildDOM(title)
    this.imageContainer = this.element.getElementsByTagName("img")[0]
    this.videoContainer = document.getElementsByTagName("video")[0]
    console.log(this.videoContainer)
    console.log(video)
    document.body.appendChild(this.element)
    this.show(url, video)
    //this.loadImage()
    this.pictures = document.querySelectorAll(".media-picture")
    // close by escape keyboard's button
    this.onKeyUp = this.onKeyUp.bind(this)
    document.addEventListener("keyup", this.onKeyUp)
    // lightbox buttons
    const prevBtn = document.querySelector(".previous-btn")
    const nextBtn = document.querySelector(".next-btn")
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault()
      this.previousImg()
    })
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault()
      this.nextImg()
    })
    document.addEventListener("keydown", (e) => {
      this.getImgWithArrows(e)
    })
  }

  // place la bonne image dans la ligthbox
  show(url, video) {
    // const hasImageProperty = this.imageContainer.hasOwnProperty("image")
    // const hasVideoProperty = this.videoContainer.hasOwnProperty("video")
    // const lightboxContainer = document.querySelector(".lightbox-container")
    // lightboxContainer.appendChild(this.pictures)
    // if (hasImageProperty) {
    this.imageContainer.src = url
    // } else if (hasVideoProperty) {
    //   this.videoContainer.src = video
    // }
  }

  previousImg() {
    this.currentIndex--
    if (this.currentIndex < 0) {
      this.currentIndex = this.pictures.length - 1
    }
    this.show(this.pictures[this.currentIndex].src)
  }

  nextImg() {
    this.currentIndex++
    if (this.currentIndex >= this.pictures.length) {
      this.currentIndex = 0
    }
    this.show(this.pictures[this.currentIndex].src)
  }

  getImgWithArrows(e) {
    if (e.code === `ArrowRight`) {
      this.nextImg(e)
    } else if (e.code === `ArrowLeft`) {
      this.previousImg(e)
    }
  }

  /**
   *
   * @param {KeyboardEvent} e
   */
  onKeyUp(e) {
    if (e.key === "Escape") {
      this.close(e)
    }
  }

  /**
   * Close the lightbox
   * @param {MouseEvent} e
   */
  close(e) {
    e.preventDefault()
    this.element.classList.add("fadeOut")
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element)
    }, 500)
    //clean the listener
    document.removeEventListener("keyup", this.onKeyUp)
  }

  /**
   *
   * @param {string} title dynamic title's images
   * @return {HTMLDivElement}
   */
  buildDOM(title) {
    // DOM creation
    const dom = document.createElement("div")

    dom.classList.add("lightbox")
    dom.innerHTML = `<button class="lightbox-closed" type="button" title="close"></button>
      <button class="next-btn" type="button" title="next"></button>
      <button  class="previous-btn" type="button" title="previous"></button>
      <div class="lightbox-container"><img src="" alt="${title}"></img></div>
      <div class="lightbox-infos">
          ${title}
      </div>`
    dom
      .querySelector(".lightbox-closed")
      .addEventListener("click", this.close.bind(this))
    return dom
  }
}
//<div class="lightbox-loader"></div>
//<img src="" alt="${title}"></img>
//<video src="" alt="${title}"></video>

// loadImage() {
//   const image = new Image()
//   const container = this.element.querySelector(".lightbox-container")
//   const loader = document.createElement("div")
//   loader.classList.add("lightbox-loader")
//   container.appendChild(loader)
//   image.onload = function () {
//     container.removeChild(loader)
//     container.appendChild(image)
//   }
// }
