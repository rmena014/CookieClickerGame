var question = prompt("Do you enjoy coookies?").toLowerCase();

if (question == "yes") {
  alert("Then come on in and enjoy!");
} else {
  alert("Then leave!");
}

let clicks = 0;

var cursorCost = 15;
var cursors = 0;

function upgradeCursor() {
  if (clicks >= cursorCost) {
    clicks = clicks - cursorCost;
    cursors = cursors + 1;
    cursorCost = Math.round(cursorCost * 1.15);

    document.getElementById("score").innerHTML = clicks;
    document.getElementById("cursorCost").innerHTML = cursorCost;
    document.getElementById("cursors").innerHTML = cursors;
  }
}

function addToScore(amount) {
  clicks = clicks + amount;
  document.getElementById("score").innerHTML = clicks;
}

setInterval(function () {
  clicks = cursors + clicks;
  document.getElementById("score").innerHTML = clicks;
}, 1000);
