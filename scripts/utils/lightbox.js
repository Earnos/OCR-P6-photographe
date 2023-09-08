/**
 * @property {HTMLElement} element
 */
class Lightbox {
  constructor(data, index, url, title) {
    this.element = this.buildDOM(data, url, title, index)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.show = this.show(index)
    this.index = index
    console.log(index)
    //this.loadImage(data)
    // add to DOM
    document.body.appendChild(this.element)
    // close by escape btn
    document.addEventListener("keyup", this.onKeyUp)
    // lightbox buttons
    const prevBtn = document.querySelector(".previous-btn")
    const nextBtn = document.querySelector(".next-btn")
    console.log(prevBtn)
    console.log(nextBtn)
    prevBtn.addEventListener("click", () => {
      this.previousImg(index)
    })
    nextBtn.addEventListener("click", () => {
      this.nextImg(index)
    })
  }

  // place la bonne image dans la ligthbox via l'index
  show(index, data, url) {
    //effacer pictures plus tard l42-43
    const pictures = document.querySelectorAll(".media-picture")
    console.log(data)
    let currentIndex = index
    console.log(currentIndex)

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
    const images = document.querySelectorAll(".media-picture")
    console.log("previous")
  }

  nextImg(currentIndex) {
    const pictures = document.querySelectorAll(".media-picture")
    const selectedIndex = (document.querySelector(
      ".lightbox-container > img"
    ).src = currentIndex)
    console.log(currentIndex)
    // pictures[3].currentSrc
    console.log("next")
    console.log(selectedIndex)

    pictures.currentSrc = selectedIndex + 1
    currentIndex = (currentIndex + 1) % pictures.length
    // const srcByIndex = pictures[0].currentSrc
  }

  // nextBtn.addEventListener("click", () => {
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
