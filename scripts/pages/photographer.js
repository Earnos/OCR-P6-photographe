import { getPhotographers } from "./index"

async function displayPhotographersData(photographersData) {
  const photographProfil = document.querySelector(".photograph-header")

  photographersData.forEach((photographer) => {
    if (photographer.id == getUrlId) {
      const photographerModel = onePhotographTemplate(photographer)
      const userProfilDOM = photographerModel.getPhotographHeaderDOM()
      photographProfil.appendChild(userProfilDOM)
    }
  })
}

async function init() {
  // Récupère les datas des photographes
  const { photograph } = await getPhotographers()
  displayPhotographersData(photograph)
}

init()

// get url's ID
// async function getPhotographData() {
//   const url = "../../data/photographers.json"
//   let photographData = await fetch(url)
//     .then((response) => response.json())
//     .then((response) => JSON.stringify(response))
//     .catch((error) => error)

//   return JSON.parse(photographData)
// }

// const photographersData = await fetch(url)
// .then((response) => response.json())
// .then((response) => JSON.stringify(response)
// .catch((error) => error)
// const response = await fetch(url)
// const res = await response.json()
// const id = getUrlId()

// return JSON.parse(photographersData)
// creation of photographer's profil header DOM elements

// function headerDisplay() {
//   const photographProfil = document.querySelector(".photograph-header")
//   const photographerInfoContent = document.createElement("div")

//   const h2 = document.createElement("h2")
//   h2.textContent = name
//   console.log(photographers[0])
//   const locality = document.createElement("h3")
//   locality.textContent = city + "," + " " + country
//   const description = document.createElement("p")
//   description.textContent = tagline

//   photographProfil.appendChild(photographerInfoContent)
//   photographerInfoContent.appendChild(h2, locality, description)
// }
// function profilDisplay() {
//   headerDisplay()
// }
