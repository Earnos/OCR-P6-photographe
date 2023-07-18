// get url's ID
urlLocation = document.location
const urlId = new URL(urlLocation)
const searchParams = urlId.searchParams
searchParams.get("search")
const CurrentID = searchParams.get("photographer-id")

async function getPhotographersProfil() {
  const url = "../../data/photographers.json"

  let photographersData = await fetch(url)
    .then((response) => response.json())
    .then((response) => JSON.stringify(response))
    .catch((error) => error)

  return JSON.parse(photographersData)
  // creation of photographer's profil header DOM elements
  function getProfilHeader() {
    const photographProfil = document.querySelector(".photograph-header")
    const photographerInfoContent = document.createElement("div")

    const h2 = document.createElement("h2")
    h2.textContent = photographersData.photographers[0]
    console.log(photographersData.photographers[0])
    const locality = document.createElement("h3")
    locality.textContent =
      photographersData.city + "," + " " + photographersData.country
    const description = document.createElement("p")
    description.textContent = photographersData.tagline

    photographProfil.appendChild(photographerInfoContent)
    photographerInfoContent.appendChild(h2, locality, description)
  }
}

function profilDisplay() {}

console.log(getPhotographersProfil())
