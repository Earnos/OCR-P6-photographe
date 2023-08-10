function displayLightbox() {
  const body = document.body
  const lightBox = document.createElement("div")
  const lightBoxContainer = document.createElement("div")
  const lightBoxInfos = document.createElement("div")
  const closedBtn = document.createElement("button")
  const nextBtn = document.createElement("button")
  const prevBtn = document.createElement("button")
  const lightboxImg = document.createElement("img")

  lightboxImg.setAttribute("src", "https://picsum.photos/id/237/1242/850")
  lightBox.setAttribute("class", "lightbox")
  lightBoxContainer.setAttribute("class", "lightbox-container")

  nextBtn.setAttribute("class", "next-btn")
  nextBtn.setAttribute("title", "next")
  nextBtn.setAttribute("type", "button")

  prevBtn.setAttribute("class", "previous-btn")
  prevBtn.setAttribute("title", "previous")
  prevBtn.setAttribute("type", "button")

  closedBtn.setAttribute("class", "lightbox-closed")
  closedBtn.setAttribute("type", "button")
  closedBtn.setAttribute("title", "close")

  lightBoxInfos.setAttribute("class", "lightbox-infos")
  lightBoxInfos.textContent = "index" + " & " + "picture name" // dynamic variables required

  body.appendChild(lightBox)
  lightBox.appendChild(closedBtn)
  lightBox.appendChild(nextBtn)
  lightBox.appendChild(prevBtn)
  lightBox.appendChild(lightBoxContainer)
  lightBoxContainer.appendChild(lightboxImg)
  lightBox.appendChild(lightBoxInfos)
}
