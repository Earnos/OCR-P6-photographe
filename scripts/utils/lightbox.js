let currentIndex = 1

/**
 * @property {HTMLElement} element
 */
class Lightbox {
  // lightboxInit(data) {
  //   console.log(data)
  //   const allpictures = document
  //     .getElementsByClassName(".media-picture")
  //     .forEach(() => {
  //       allpictures.addEventListener("click", (e) => {
  //         e.preventDefault()
  //         new Lightbox(e.currentTarget.getAttribute("src"))
  //       })
  //     })
  //////////////////////
  //   const links = document
  //     .querySelectorAll('a[href$=".png"], a[href$=".jpeg"], a[href$=".jpg"]')
  //     .forEach((link) =>
  //       link.addEventListener("click", (e) => {
  //         e.preventDefault()
  //         new Lightbox(e.currentTarget.getAttribute("href"))
  //       })
  //     )
  //}

  /**
   * @param {string} data
   */
  constructor(data, index, url, title) {
    this.element = this.buildDOM(data, url, title, index)
    this.getImages = this.getImages(data)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.show = this.show(index)
    this.nextImg = this.nextImg(index, url)
    //this.previousImg = this.previousImg()
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
    let currentIndex = 1

    if (index > pictures.length) {
      currentIndex = 1
    }
    if (index < 1) {
      currentIndex = pictures.length
    }
  }

  currentImg(index) {
    this.show((currentIndex = index))
    // const prevBtn = document.querySelector(".previous-btn")
    // const images = document.querySelectorAll(".media-picture")
    // console.log(prevBtn)
    // prevBtn.addEventListener("click", () => {
    //   alert("ahhhhhhhhh !!!!!!")
    //images[0].currentSrc
    //   })
    // }
  }

  nextImg(currentIndex, url) {
    const images = Array.from(document.querySelectorAll(".media-picture"))
    images.currentSrc = currentIndex + 1
    //   this.show((currentIndex += index))
    // const nextBtn = document.querySelector(".next-btn")
    // const images = document.querySelectorAll(".media-picture")
    // console.log(nextBtn)
    // let currentIndex = 1
    // const srcByIndex = images[0].currentSrc
    //currentIndex + 1 >=  images.length
  }

  // nextBtn.addEventListener("click", () => {
  //   document.querySelector(".lightbox-container > img").src =
  //     images[2].currentSrc
  // })
  // prevBtn.addEventListener("click", () => {
  //   images.currentSrc - 1
  // })
  //}

  // previousImg() {
  //   const prevBtn = document.querySelector(".previous-btn")
  //   const images = document.querySelectorAll(".media-picture")
  //   console.log(prevBtn)
  //   prevBtn.addEventListener("click", () => {
  //     alert("ahhhhhhhhh !!!!!!")
  //     images[0].currentSrc
  //   })
  // }

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
    //clean the listener after utilisation for better performance
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
      <button  class="next-btn" type="button" title="next"  onclick="nextImg(1)" ></button>
      <button  class="previous-btn" type="button" title="previous"></button>
      <div class="lightbox-container"><img src="${url}" alt="???"></img></div>
      <div class="lightbox-infos">
        ${index}  ${title}
      </div>`
    dom
      .querySelector(".lightbox-closed")
      .addEventListener("click", this.close.bind(this))
    return dom
  }
}

//${images[2].currentSrc}
//<img src=${mediaPhoto} alt="???"></img>
//<div class="lightbox-loader"></div>
//<img src="${image}" title="Lilac breasted roller" >

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
