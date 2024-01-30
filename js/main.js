// Preparació del canvas ----------------------
/* Obté una referència a <canvas>, després crida al mètode getContext()
  per definir un context al el que es pot començar a dibuisar
  (ctx) és un objecte que representa l'àrea de dibuix del 
  <canvas> y permet dibuixar elements 2D al damunt.

  width and height són dreceres a l'ample i alt del canvas  que coincideixen
  amb l'alt i ample del navegador (viewport)
*/
//Import de la classe Pilota
import { Pilota } from "./pilota.js"

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// funció per generar un número aleatori entre dues xifres

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// funció per generar un color aleatori

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//Array de Pilota
let pilotes = [] //Variable que usarem per emmagatzemar Pilotes, o que bones
//Funció per detectar si dues pilotes col·lisionen
function detectCollision(){

  pilotes.forEach(i => {
    pilotes.forEach(j => {
      if (i.x == j.x || i.y == j.y){
        console.log(i.x == j.x);
        console.log(i.y == j.y);
      }
    })
  })
}
/*
Funció loop():
    · Pinta tot el rectangle de la pantalla de negre
    · Crea 25 pilotes aleatòries
        - mides entre 10 i 20
        - posició aleatòria x entre (0+mida) i (witdh - mida)
        - posició aleatòria y entre (0+mida) i (heigth - mida)
    · afegeix les pilotes a l'array
    · recorre l'array i per cada pilota:
        - pilota.dibuixa(ctx)
        - pilota.mou()
    · crida a requestAnimationFrame(loop)
*/
function loop() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (pilotes.length < 25) {
    for (let i=0; i<25; i++) {
      let midaPilota = random(10, 20);
      let posicioX = random((0+midaPilota), (canvas.width-midaPilota));
      let posicioY = random((0+midaPilota), (canvas.height-midaPilota));
      let velX = random(-7, 7);
      let velY = random(-7, 7);
      let pilota = new Pilota(posicioX, posicioY, velX, velY, randomRGB(), midaPilota);
      pilotes[i] = pilota;
    }
  }
  
  pilotes.forEach(pilota => {
    pilota.dibuixa(ctx);
    pilota.mou();
  })
  // detectCollision();
  requestAnimationFrame(loop);
}

loop();