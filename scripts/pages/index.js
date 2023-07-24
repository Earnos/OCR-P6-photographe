/**
 * Fecth photographers
 * with local json data
 * @returns {Promise} photographersData - stringify json's data
 */
async function getPhotographers() {
  const url = "../../data/photographers.json"

  let photographersData = await fetch(url)
    .then((response) => response.json())
    .then((response) => JSON.stringify(response))
    .catch((error) => error)

  return JSON.parse(photographersData)
}
/**
 * Display Data
 * @returns {HTMLElement}
 */
async function displayData(photographersData) {
  const photographersSection = document.querySelector(".photographer_section")

  photographersData.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()

    photographersSection.appendChild(userCardDOM)
  })
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers()
  displayData(photographers)
}

init()
