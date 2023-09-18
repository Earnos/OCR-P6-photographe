/**
 * @property {HTMLElement} element
 */
class Lightbox {
  constructor(data, index, url, title) {
    this.currentIndex = index
    this.element = this.buildDOM(title)
    this.imageContainer = this.element.getElementsByTagName("img")[0]
    console.log(this.imageContainer)
    console.log(this.element)
    document.body.appendChild(this.element)
    this.show(url)
    //this.loadImage(media)
    // add to DOM
    this.onKeyUp = this.onKeyUp.bind(this)
    // close by escape btn
    document.addEventListener("keyup", this.onKeyUp)
    // lightbox buttons
    const prevBtn = document.querySelector(".previous-btn")
    const nextBtn = document.querySelector(".next-btn")
    prevBtn.addEventListener("click", () => {
      this.previousImg(data)
    })
    nextBtn.addEventListener("click", () => {
      this.nextImg(data)
    })
  }
  // place la bonne image dans la ligthbox via l'index
  show(url) {
    this.imageContainer.src = url
  }

  previousImg(data) {
    console.log(data[1])
    console.log("previous")
    this.currentIndex - 1
    if (this.currentIndex < 1) {
      this.currentIndex = data[1].length
    }
  }

  nextImg(data) {
    console.log("next")
    this.currentIndex + 1
    if (this.currentIndex > data[1].length) {
      currentIndex = 1
    }
    //   if (this.currentIndex === data[0].length - 1) return
    //   this.currentIndex + 1
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
  buildDOM(title) {
    // DOM creation
    const dom = document.createElement("div")

    dom.classList.add("lightbox")
    dom.innerHTML = `<button class="lightbox-closed" type="button" title="close"></button>
      <button class="next-btn" type="button" title="next"></button>
      <button  class="previous-btn" type="button" title="previous"></button>
      <div class="lightbox-container"><img src="" alt="???"></img></div>
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
