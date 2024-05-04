var elements = document.getElementsByClassName("column");

function one() {
  for (i = 0; i < elements.length; i++) {
      elements[i].style.flex = "40%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
      elements[i].style.flex = "20%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
      elements[i].style.flex = "12%";
  }
}
