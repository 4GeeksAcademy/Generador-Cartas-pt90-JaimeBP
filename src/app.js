/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const simbolos = ["♠", "♥", "♣", "♦"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function generateRandomCard() {
  const randomSimbolo = simbolos[Math.floor(Math.random() * simbolos.length)];
  const randomValor = valores[Math.floor(Math.random() * valores.length)];

  const topSimbolo = document.getElementById("top-simbolo");
  const cardNumero = document.getElementById("card-numero");
  const bottomSimbolo = document.getElementById("bottom-simbolo");

  topSimbolo.textContent = randomSimbolo;
  cardNumero.textContent = randomValor;
  bottomSimbolo.textContent = randomSimbolo;

  const isRed = randomSimbolo === "♥" || randomSimbolo === "♦";
  if (isRed) {
    topSimbolo.className = "simbolo red";
    bottomSimbolo.className = "simbolo red";
  } else {
    topSimbolo.className = "simbolo black";
    bottomSimbolo.className = "simbolo black";
  }
}

document
  .getElementById("generate-card")
  .addEventListener("click", generateRandomCard);

generateRandomCard();
