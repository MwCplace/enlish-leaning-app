const bigLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const smallLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const elements = document.getElementsByClassName("column");

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

const container = document.getElementsByClassName('card-cnt');

for (let i = 0; i < bigLetters.length; i++) {
  const el1 = document.createElement('div');
  el1.classList.add("card");
  el1.classList.add("column");
  container[0].appendChild(el1);
  // document.createElement('h2');
}

const titles = document.querySelectorAll('h2');
const subtitles = document.querySelectorAll('p');

for (let i = 0; i < bigLetters.length; i++) {
  console.log(titles[i]);
  titles[i].innerHTML = bigLetters[i] + " " + smallLetters[i];
}
