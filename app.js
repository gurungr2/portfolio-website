function hover(element) {
  element.setAttribute('src', 'ramesh2.jpg');
}

function unhover(element) {
  element.setAttribute('src', 'ramesh.jpg');
}

function aboutMessage() {
   var el = document.getElementById('about-me');
   el.style.visibility = "visible";
}
