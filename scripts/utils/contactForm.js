function displayModal() {
  const modal = document.getElementById("contact_modal")
  modal.style.display = "block"
}

function closeModal() {
  const modal = document.getElementById("contact_modal")
  modal.style.display = "none"
}

function submitForm() {
  console.log("message envoyé !")
}
// function formContactName() {
//   //dynamic photographer'sname display
//   const formName = document.querySelector(".modal > header")
//   const titleName = document.createElement("h3")
//   titleName.textContent = name
//   formName.appendChild(titleName)
// }
