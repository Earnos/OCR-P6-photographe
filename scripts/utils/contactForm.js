function displayModal() {
  const modal = document.getElementById("contact_modal")
  modal.style.display = "block"
}

function closeModal() {
  const modal = document.getElementById("contact_modal")
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

// function submitForm() {
//   const formBtn = document.querySelector(".contact_button")
//   e.preventDefault()
//   console.log("message envoyé !")
//   formBtn.addEventListener("click", (e) => {
//     // le console log dois renvoyé les infos des inputs du form
//   })
//   return false
// }

// function formContactName() {
//   //dynamic photographer'sname display
//   const formName = document.querySelector(".modal > header")
//   const titleName = document.createElement("h3")
//   titleName.textContent = name
//   formName.appendChild(titleName)
// }

// function getFormValues(e) {
//   e.preventDefault()

//   const form = document.getElementsByTagName("form")

//   const allInputs = form.querySelectorAll("input")

//   let formObj = {}

//   // get the values of each filed
//   allInputs.forEach((e) => {
//     // all depend of the name in the element
//     const key = e.getAttribute("name")

//     if (key) {
//       formObj[key] = e.value
//     }
//   })

//   console.log(formObj)
//   return false
// }
