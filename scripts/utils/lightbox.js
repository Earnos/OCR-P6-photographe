/**
 * @property {HTMLElement} element
 */
class Lightbox {
  constructor(data, index, url, title) {
    this.data = data
    this.currentIndex = index
    this.element = this.buildDOM(title)
    this.imageContainer = this.element.getElementsByTagName("img")[0]
    this.videoContainer = document.getElementsByTagName("video")[0]
    this.imageTitle = this.element.getElementsByClassName("lightbox-infos")[0]
    console.log(this.imageTitle)
    document.body.appendChild(this.element)
    this.show(url, title)
    this.pictures = document.querySelectorAll(".media-picture")
    // close by escape keyboard's button
    this.onKeyUp = this.onKeyUp.bind(this)
    document.addEventListener("keyup", this.onKeyUp)
    // lightbox buttons
    const prevBtn = document.querySelector(".previous-btn")
    const nextBtn = document.querySelector(".next-btn")
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault()
      this.previousImg(title)
    })
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault()
      this.nextImg(title)
    })
    document.addEventListener("keydown", (e) => {
      this.getImgWithArrows(e)
    })
  }

  // show dynamics url & titles
  show(url, title) {
    this.imageContainer.src = url
    this.imageContainer.alt = title
    this.imageTitle.innerText = title
  }

  previousImg(title) {
    this.currentIndex--
    if (this.currentIndex < 0) {
      this.currentIndex = this.pictures.length - 1
    }
    let switchTitle = this.imageTitle.textContent
    this.show(
      this.pictures[this.currentIndex].src,
      this.pictures[this.currentIndex].alt,
      switchTitle.replace(title)
    )
  }

  nextImg(title) {
    this.currentIndex++
    if (this.currentIndex >= this.pictures.length) {
      this.currentIndex = 0
    }
    let switchNextTitle = this.imageTitle.textContent
    this.show(
      this.pictures[this.currentIndex].src,
      this.pictures[this.currentIndex].alt,
      switchNextTitle.replace(title)
    )
  }

  getImgWithArrows(e) {
    if (e.code === `ArrowRight`) {
      this.nextImg(e)
    } else if (e.code === `ArrowLeft`) {
      this.previousImg(e)
    }
  }

  /**
   * close lightbox with escape
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
   * Build lightbox DOM
   * @param {string} title dynamic title's images
   * @return {HTMLDivElement}
   */
  buildDOM(title) {
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
