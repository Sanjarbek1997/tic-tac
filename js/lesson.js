// let elList = document.querySelector(".list")
let elBtn = document.querySelector("#btn");
const box_1 = document.querySelector("#one");
const box_2 = document.querySelector("#two");
const box_3 = document.querySelector("#three");
const box_4 = document.querySelector("#four");
const box_5 = document.querySelector("#five");
const box_6 = document.querySelector("#six");
const box_7 = document.querySelector("#seven");
const box_8 = document.querySelector("#eight");
const box_9 = document.querySelector("#nine");
// currentPlayer = 0

console.log(currentPlayer);
// const restartBtn = document.querySelector("#restart");
// const text = document.querySelector("#heading");

// var elBtnRec = document.querySelector(".btn-rec");
// console.log(restartBtn)
var record = new webkitSpeechRecognition();

record.lang = "en-US";

record.onend = function () {
  console.log("===== Aloqa tugadi =====");
};

record.onerror = function () {
  console.log("===== Xatolik yuz berdi =====");
};

record.onresult = function (evt) {
  var command = evt["results"][0][0]["transcript"];

  text.innerHTML = command;
  if (command === "1") {
    box_1.innerHTML = currentPlayer;
  }
  if (command === "2") {
    box_2.innerHTML = currentPlayer;
  }
  if (command === "3") {
    box_3.innerHTML = currentPlayer;
  }
  if (command === "4") {
    box_4.innerHTML = currentPlayer;
  }
  if (command === "5") {
    box_5.innerHTML = currentPlayer;
  }
  if (command === "6") {
    box_6.innerHTML = currentPlayer;
  }
  if (command === "7") {
    box_7.innerHTML = currentPlayer;
  }
  if (command === "8") {
    box_8.innerHTML = currentPlayer;
  }
  if (command === "9") {
    box_9.innerHTML = currentPlayer;
  }
  currentPlayer = currentPlayer === tick_circle ? tick_x : tick_circle;
  console.log(currentPlayer);
};

elBtn.addEventListener("click", function () {
  console.log("===== Aloqa boshlandi =====");
  record.start();
});
