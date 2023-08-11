//function displayLightbox() {
//create DOM element for lightbox first way (full javascript)
// const body = document.body
// const lightBox = document.createElement("div")
// const lightBoxContainer = document.createElement("div")
// const lightBoxInfos = document.createElement("div")
// const closedBtn = document.createElement("button")
// const nextBtn = document.createElement("button")
// const prevBtn = document.createElement("button")
// const lightboxImg = document.createElement("img")
// lightboxImg.setAttribute("src", "https://picsum.photos/id/237/1242/850")
// lightBox.setAttribute("class", "lightbox")
// lightBoxContainer.setAttribute("class", "lightbox-container")
// nextBtn.setAttribute("class", "next-btn")
// nextBtn.setAttribute("title", "next")
// nextBtn.setAttribute("type", "button")
// prevBtn.setAttribute("class", "previous-btn")
// prevBtn.setAttribute("title", "previous")
// prevBtn.setAttribute("type", "button")
// closedBtn.setAttribute("class", "lightbox-closed")
// closedBtn.setAttribute("type", "button")
// closedBtn.setAttribute("title", "close")
// lightBoxInfos.setAttribute("class", "lightbox-infos")
// lightBoxInfos.textContent = "index" + " & " + "picture name" // dynamic variables required
// body.appendChild(lightBox)
// lightBox.appendChild(closedBtn)
// lightBox.appendChild(nextBtn)
// lightBox.appendChild(prevBtn)
// lightBox.appendChild(lightBoxContainer)
// lightBoxContainer.appendChild(lightboxImg)
// lightBox.appendChild(lightBoxInfos)
// DOM with innerHTML 2nd way (with innerHTML)
// const body = document.body
// const dom = document.createElement("div")
// dom.classList.add("lightbox")
// dom.innerHTML = `<button class="lightbox-closed" type="button" title="close"></button>
//   <button  class="next-btn" type="button" title="next"></button>
//   <button  class="previous-btn" type="button" title="previous"></button>
//   <div class="lightbox-container">
//     <img src="https://picsum.photos/id/237/1242/850">
//   </div>
//   <div class="lightbox-infos">index & img name</div>`
// body.appendChild(dom)
//}

/**
 * @property {HTMLElement} element
 */
class Lightbox {
  static LightboxInit() {
    const links = document
      .querySelectorAll('a[href$=".png"], a[href$=".jpeg"], a[href$=".jpg"]')
      .forEach((link) =>
        link.addEventListener("click", (e) => {
          e.preventDefault()
          new Lightbox(e.currentTarget.getAttribute("href"))
        })
      )
    console.log(links)
  }
  /**
   * @param {string} url URL de l'image
   */
  constructor(data) {
    this.element = this.buildDOM(data)
    this.loadImage(data)
    this.onKeyUp = this.onKeyUp.bind(this)
    document.body.appendChild(this.element)
    document.addEventListener("keyup", this.onKeyUp)
  }
  loadImage(data) {
    const image = new Image()
    const container = this.element.querySelector(".lightbox-container")
    const loader = document.createElement("div")
    loader.classList.add("lightbox-loader")
    container.appendChild(loader)
    image.onload = function () {
      container.removeChild(loader)
      container.appendChild(image)
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
    //clean the listener after utilisation for better performance
    document.removeEventListener("keyup", this.onKeyUp)
  }

  /**
   *
   * @param {string} url URL de l'image
   * @return {HTMLElement}
   */
  buildDOM(data) {
    const [{ title, image, likes, date, price }] = data[1]
    //data.preventDefault()
    console.log(data[1][0])
    const dom = document.createElement("div")
    dom.classList.add("lightbox")
    dom.innerHTML = `<button class="lightbox-closed" type="button" title="close"></button>
      <button  class="next-btn" type="button" title="next"></button>
      <button  class="previous-btn" type="button" title="previous"></button>
      <div class="lightbox-container"></div>
      <div class="lightbox-infos">
        ${data[1].indexOf(image) + 1}  ${title}
      </div>`
    dom
      .querySelector(".lightbox-closed")
      .addEventListener("click", this.close.bind(this))
    return dom
  }
}

//<div class="lightbox-loader"></div>
//<img src="${image}" title="Lilac breasted roller" >
