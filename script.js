const boutonNote = document.getElementsByClassName("rating--button");
const message = document.getElementById("rate");
const boutonSubmit = document.getElementById("submit--button");

for (i = 0; i < boutonNote.length; i++) {
  boutonNote[i].addEventListener("click", function () {
    for (j = 0; j < boutonNote.length; j++) {
      if (boutonNote[j] !== this) {
        boutonNote[j].classList.remove("selected--rate");
      }
    }
    this.classList.toggle("selected--rate");
  });
}

function add1() {
  message.innerHTML = "You selected 1 out of 5";
}
function add2() {
  message.innerHTML = "You selected 2 out of 5";
}
function add3() {
  message.innerHTML = "You selected 3 out of 5";
}
function add4() {
  message.innerHTML = "You selected 4 out of 5";
}
function add5() {
  message.innerHTML = "You selected 5 out of 5";
}

const displayRate = document.getElementById("container--rating");
const displayThanks = document.getElementById("container--thanks");

function changeDisplay() {
  if (message.innerHTML !== "") {
    displayRate.style.display = "none";
    displayThanks.style.display = "flex";
  }
}
