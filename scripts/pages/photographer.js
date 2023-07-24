// get id from url
urlLocation = document.location
const urlId = new URL(urlLocation)
console.log(urlLocation.href)
const searchParams = urlId.searchParams
searchParams.get("search")
const ID = searchParams.get("photographer-id")

/**
 * Fecth photographers
 * with local json data
 * @returns {Promise} photographersData - stringify json's data
 */
async function getPhotographers() {
  const url = "../../data/photographers.json"

  let photographersData = await fetch(url)
  const res = await photographersData.json()
  //.then((response) => response.json())
  //.then((response) => (res = JSON.stringify(response)))
  //.catch((error) => error)
  res.photographers.forEach((photographer) => {
    if (photographer.id == ID) {
      //console.log(photographer.id)
      return res.photographer
    }
  })
}

async function displayPhotographersData(photographersData) {
  const photographProfil = document.querySelector(".photograph-header")

  photographersData.forEach((photographer) => {
    const photographerModel = onePhotographTemplate(photographer)
    const userProfilDOM = photographerModel.getPhotographHeaderDOM()

    photographProfil.appendChild(userProfilDOM)
  })
}

// async function displayPhotographerMedia(photographersData) {
//   const photographProfil = document.querySelector(".photograph-header")

//   photographersData.forEach((photographer) => {
//     const photographerModel = onePhotographTemplate(photographer)
//     const userProfilDOM = photographerModel.getPhotographHeaderDOM()

//     photographProfil.appendChild(userProfilDOM)
//   })
// }

async function init() {
  // Récupère les datas d'un photographe
  const { photographers } = await getPhotographers()
  displayPhotographersData(photographers)
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
