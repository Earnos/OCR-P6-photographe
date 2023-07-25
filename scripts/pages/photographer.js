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
 * @returns {Object} photographersData - stringify json's data
 */
async function getPhotographers() {
  const url = "../../data/photographers.json"

  let photographersData = await fetch(url)
  const res = await photographersData.json()
  let p
  res.photographers.forEach((photographer) => {
    if (photographer.id == ID) {
      p = photographer
    }
  })
  return p
}

async function displayPhotographersData(photographersData) {
  const photographProfil = document.querySelector(".photograph-header")

  console.log(photographersData)
  const photographerModel = photographerFactory(photographersData)
  const userProfilDOM = photographerModel.getPhotographHeaderDOM()
  photographProfil.appendChild(userProfilDOM)
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
  const photographers = await getPhotographers()
  console.log(photographers)
  displayPhotographersData(photographers)
}
init()
