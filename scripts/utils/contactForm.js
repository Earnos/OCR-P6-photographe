function displayModal() {
  const modal = document.getElementById("contact_modal")
  const main = document.getElementById("main")
  const header = document.getElementById("header")
  const firstInput = document.getElementById("first-name")
  //const closeModal = document.getElementById("close-modal")

  main.setAttribute("aria-hidden", "true")
  header.setAttribute("aria-hidden", "true")
  modal.setAttribute("aria-hidden", "false")

  modal.style.display = "block"
  firstInput.focus()
}

function closeModal() {
  const modal = document.getElementById("contact_modal")
  const main = document.getElementById("main")
  const header = document.getElementById("header")

  main.setAttribute("aria-hidden", "false")
  header.setAttribute("aria-hidden", "false")
  modal.setAttribute("aria-hidden", "true")

  modal.style.display = "none"
}

function getFormNameTitle(name) {
  const headerTitle = document.querySelector(".modal  h2")
  headerTitle.innerHTML = `Contactez-moi <br> ${name}`
}

function getFormValues() {
  const form = document.getElementById("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const firstName = document.getElementsByTagName("input")[0].value
    const lastName = document.getElementsByTagName("input")[1].value
    const Email = document.getElementsByTagName("input")[2].value
    const message = document.getElementsByTagName("textarea")[0].value

    console.log(firstName, lastName, Email, message)

    return false
  })
}
