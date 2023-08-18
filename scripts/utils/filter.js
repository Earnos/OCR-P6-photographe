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
    <div class="select"  aria-controls="menu" tabindex="0">
    <span class="selected">Popularité</span>
    <div class="caret"></div>
    </div>
    <ul class="menu" role="menu" aria-labelledby="menubutton"> 
    <hr/>
    <li role="menuitem">Date</li>
    <hr/>
    <li role="menuitem">Titre</li>
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
