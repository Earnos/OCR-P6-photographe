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

  // local data storage photographers
  localStorage.setItem("storage", JSON.stringify(photographersData))

  return JSON.parse(photographersData)
}

async function displayData(photographersData) {
  const photographersSection = document.querySelector(".photographer_section")

  photographersData.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer)
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

// const linkStorage = document.getElementsByTagName("a")
// for (let i = 0; i < linkStorage.length; i++) {
//   console.log(linkStorage)
//   linkStorage[i].addEventListener("click", () => {
//     localStorage.setItem(`photographer.html`, photographersData)
//   })
// }
