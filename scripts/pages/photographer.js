// get id from url
urlLocation = document.location
const urlId = new URL(urlLocation)
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

  // Medias by current ID
  let m
  const findMediaById = res.media.filter((media) => {
    if (media.photographerId == ID) {
      return (m = media)
    }
  })
  return { photographer: p, media: findMediaById }
}

async function displayPhotographersData(photographersData) {
  const photographProfil = document.querySelector(".photograph-header")
  const photographerModel = photographerFactory(photographersData)
  const userProfilDOM = photographerModel.getPhotographHeaderDOM()
  photographProfil.appendChild(userProfilDOM)
}

async function displayPhotographerMedia(allDatas) {
  document.querySelector(".main")
  mediaTemplate(allDatas)
}

async function init() {
  //Get photographer's data & media
  const { photographer, media } = await getPhotographers()
  //const photographers = await getPhotographers()
  displayPhotographersData(photographer)
  displayPhotographerMedia([photographer, media])
}
init()
