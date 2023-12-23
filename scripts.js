function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const avatarImage = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    avatarImage.setAttribute("src", "./assets/avatar.jpg")
  } else {
    avatarImage.setAttribute("src", "./assets/avatar.jpg")
  }
}
