/**
 * @property {HTMLElement} element
 */
class Lightbox {
  constructor(data, index, url, title) {
    this.element = this.buildDOM(data, url, title, index)
    this.getImages = this.getImages(data)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.show = this.show(index)
    // this.nextImg = nextBtn.addEventListener("click", () => {
    //   this.nextImg(index)
    // })
    this.nextImg = this.nextImg(index)
    this.previousImg = this.previousImg()
    //this.loadImage(data)
    //this.switch = this.switchImg(data) //logique recup photo list ( creer founction show(index) {indice})

    // a rajouté dans la fonction show() ? (pour éviter le lancement auto du constructeur?)
    document.body.appendChild(this.element)
    document.addEventListener("keyup", this.onKeyUp)
  }

  getImages() {
    const images = Array.from(document.querySelectorAll(".media-picture"))
    console.log(images)
    images.forEach((img) => {
      img.addEventListener("click", (e) => {
        e.preventDefault()
        //this.buildDOM(data)
      })
    })
  }

  show(index) {
    const pictures = document.querySelectorAll(".media-picture")
    console.log(pictures)
    let currentIndex = 0

    if (index > pictures.length) {
      currentIndex = 1
    }
    if (index < 1) {
      currentIndex = pictures.length
    }
  }

  currentImg(index) {
    this.show((currentIndex = index))
  }

  previousImg() {
    const prevBtn = document.querySelector(".previous-btn")
    const images = document.querySelectorAll(".media-picture")
    console.log(prevBtn)
  }

  nextImg(currentIndex, url) {
    const nextBtn = document.getElementById("#next")
    console.log(nextBtn)
    const pictures = document.querySelectorAll(".media-picture")
    pictures.currentSrc = currentIndex + 1
    currentIndex = (currentIndex + 1) % pictures.length
    // const srcByIndex = images[0].currentSrc
  }

  // nextBtn.addEventListener("click", () => {
  //   document.querySelector(".lightbox-container > img").src =
  //     images[2].currentSrc
  // })
  // prevBtn.addEventListener("click", () => {
  //   images.currentSrc - 1
  // })
  //}

  // loadImage(data) {
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
  buildDOM(data, url, title, index) {
    // destructuring of data
    // const [{ image }] = data[1]
    // const { name } = data[0]
    // console.log(data[1][0])

    // DOM creation
    const dom = document.createElement("div")
    const images = document.querySelectorAll(".media-picture")
    const imageTag = images[0].currentSrc
    //console.log(images.currentSrc)
    //console.log(data[1])

    dom.classList.add("lightbox")
    dom.innerHTML = `<button class="lightbox-closed" type="button" title="close"></button>
      <button id='next' class="next-btn" type="button" title="next"></button>
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
