/**
 * @property {HTMLElement} element
 */
class Lightbox {
  constructor(data, index, url, title) {
    this.element = this.buildDOM(url, title)
    document.body.appendChild(this.element)
    this.show = this.show(data, index)
    this.index = index
    //this.loadImage(media)
    // add to DOM
    this.onKeyUp = this.onKeyUp.bind(this)
    // close by escape btn
    document.addEventListener("keyup", this.onKeyUp)
    // lightbox buttons
    const prevBtn = document.querySelector(".previous-btn")
    const nextBtn = document.querySelector(".next-btn")
    prevBtn.addEventListener("click", () => {
      this.previousImg(index)
    })
    nextBtn.addEventListener("click", () => {
      this.nextImg(index)
    })
  }
  // place la bonne image dans la ligthbox via l'index
  show(index, data) {
    const lightboxImg = document.querySelector(".lightbox-container > img")
    console.log(lightboxImg.parentElement.parentElement)
    const pictures = document.querySelectorAll(".media-picture")
    const picture = document.querySelector(".media-picture")
    console.log(data)
    console.log(pictures)
    console.log(picture)

    let currentIndex = pictures[index]
    console.log(index)
    //let currentIndex = data[1].indexOf(this.element)
    //let currentIndex = index.indexOf(indexById)
    // const currentIndex = pictures.findIndex(
    //   (element) => element.src == picture.src
    // )
    //let indexById = pictures.findIndex((element) => element.id == id)
    //console.log(indexById)

    if (this.currentIndex > pictures.length) {
      currentIndex = 1
    }
    if (this.currentIndex < 1) {
      currentIndex = pictures.length
    }
    //this.buildDOM()
  }

  currentImg(index, currentIndex) {
    this.show((currentIndex = index))
  }

  previousImg(index, currentIndex) {
    console.log("previous")
    currentIndex -= 1
  }

  nextImg(currentIndex, index) {
    const pictures = document.querySelectorAll(".media-picture")
    let slides = pictures
    //const { id } = index
    if (currentIndex === slides.length - 1) return
    currentIndex += 1

    //pictures.findIndex((element) => element.id == index.id)
    // const selectedIndex = (document.querySelector(
    //   ".lightbox-container > img"
    // ).src = pictures[3].src)
    console.log("next")
    console.log(currentIndex)
    //currentIndex = (currentIndex + 1) % pictures.length
    //pictures.src = currentIndex + 1
    // const srcByIndex = pictures[0].currentSrc
  }

  // loadImage(media) {
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
   * @param {string} url URL de l'image
   * @return {HTMLElement}
   */
  buildDOM(url, title) {
    // DOM creation
    const dom = document.createElement("div")

    dom.classList.add("lightbox")
    dom.innerHTML = `<button class="lightbox-closed" type="button" title="close"></button>
      <button class="next-btn" type="button" title="next"></button>
      <button  class="previous-btn" type="button" title="previous"></button>
      <div class="lightbox-container"><img src="${url}" alt="???"></img></div>
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
