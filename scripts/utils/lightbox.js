function displayLightbox() {
  const articlePicture = document.querySelector(".media-picture")
  const modal = document.getElementById("contact_modal")
  const modalHeader = document.querySelector(".modal > form")
  const form = document.querySelector(".modal > hearder")

  modal.style.display = "block"
  form.style.display = "hidden"
  modalHeader.style.display = "hidden"
}
