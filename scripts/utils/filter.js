function getDropDownMenu() {
  // DOM filter container
  const photosContainer = document.querySelector("#main")
  const mediaContainer = document.getElementById("media-container")
  const filterContainer = document.createElement("div")
  const fitlerText = document.createElement("p")

  filterContainer.setAttribute("class", "filter-container")
  fitlerText.setAttribute("class", "filter-text")

  filterContainer.appendChild(fitlerText)
  photosContainer.insertBefore(filterContainer, mediaContainer)

  // DropDown menu

  filterContainer.innerHTML = `
  <p>Trier par</p>
  <div class="dropdown">
    <div class="select"  aria-controls="menu" tabindex="0"
     aria-label="choix du mode de tri" aria-expanded="false" aria-haspopup="true">
    <span class="selected">Popularité</span>
    <div class="caret"></div>
    </div>
    <ul class="menu" role="menu" aria-labelledby="menu du filtre"> 
    <li role="menuitem" class="active" tabindex="0" aria-current="page" >Popularité</li>
    <hr/>
    <li role="menuitem" tabindex="0">Date</li>
    <hr/>
    <li role="menuitem" tabindex="0">Titre</li>
    </ul>
    </div>
    `
  // <li class="active" role="menuitem" >Popularité</li>

  const dropdown = document.querySelector(".dropdown")
  const select = dropdown.querySelector(".select")
  const caret = dropdown.querySelector(".caret")
  const menu = dropdown.querySelector(".menu")
  const options = dropdown.querySelectorAll(".menu li")
  const selected = dropdown.querySelector(".selected")

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked")
    caret.classList.toggle("caret-rotate")
    menu.classList.toggle("menu-open")
  })
  dropdown.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      document.querySelector(".select").click()
    }
  })
  // loop on all options elements
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText
      select.classList.remove("select-clicked")
      caret.classList.remove("caret-rotate")
      menu.classList.remove("menu-open")
      // remove active class from all options elements
      options.forEach((option) => {
        option.classList.remove("active")
      })
      option.classList.add("active")
    })
  })
}
