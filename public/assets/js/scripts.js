function navToggle() {
  var nav = document.getElementById("nav");
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
  } else {
    nav.classList.add("hidden")
  }
}