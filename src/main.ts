
// const tubuhUlar = [
//   {
//     x: 100,
//     y: 100
//   }
// ];
// const apel = {
//   x: 380,
//   y: 380
// };
// let panjangUlar: number = 1;

// if (
//   tubuhUlar[0].x === apel.x &&
//   tubuhUlar[0].y === apel.y
// ) {
//   panjangUlar = panjangUlar + 1;
//   console.log("Apel Dimakan");
//   console.log("Panjang Ular: ", panjangUlar);
//   apel.x = Math.floor(Math.random() * 400);
//   apel.y = Math.floor(Math.random() * 400);

//   console.log("posisi Apel baru: ", apel.x, apel.y);

// Ulang kedua
// };
// const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
// const ctx = canvas.getContext("2d")!;

// let playerX: number = 0;
// let playerY: number = 370;
// let apelX: number = 300;
// let apelY: number = 50;
// let rintanganX: number = 130;
// let rintanganY: number = 170;

// const playerSize: number = 30;
// const apelSize: number = 20;
// const rintanganSize: number = 25;
// const rintangan2Size: number = 150;
// const namaPemain: string = "Sanz";


// let GameOver: boolean = false;
// let score: number = 0;

// ctx.fillStyle = "green";
// ctx.fillRect(
//   playerX,
//   playerY,
//   playerSize,
//   playerSize
// );
// console.log("Posisi X: ", playerX);
// console.log("Posisi Y: ", playerY);
// console.log("GameOver : ", GameOver);
// console.log("Score : ", score);

// ctx.fillStyle = "darkred";
// ctx.fillRect(apelX, apelY, apelSize, apelSize);

// ctx.fillStyle = "brown";
// ctx.fillRect(rintanganX, rintanganY, rintangan2Size, rintanganSize);

// Lanjutin yang percobaan 1
// ctx.fillStyle = "green";
// ctx.fillRect(
//   100,
//   100,
//   20,
//   20);

//   ctx.fillStyle = "red";
//   ctx.fillRect(
//   apel.x,
//   apel.y,
//   20,
//   20);

// Percobaan 3
const tubuhUlar1 = [
  { x: 150, y: 100 },
  { x: 125, y: 100 },
  { x: 100, y: 100 },
  { x: 75, y: 100 },
  { x: 50, y: 100 }
];

const apel1 = [ {
  x: 380,
  y: 380
},
  {
  x: 380,
  y: 0
  },
  {
  x: 0,
  y: 380
  },
  {
    x: 0,
    y: 0
  }
];

const rintangan1 = [
  {
  x: 150,
  y: 180,
  width: 100,
  height: 30,
  color: "darkblue"
},
  {
  x: 50,
  y: 300, 
  width: 80,
  height: 30,
  color: "babyblue"
}
];

const namaPemain1: string = "Sanzz";
const skor1Teks = document.getElementById("skor1") as HTMLDivElement;
let skor1: number = 0;
let nyawa: number = 3;
let levelgame: number = 1;
let gameOver1: boolean = false;
let gamePause: boolean = false;

// skor1 = skor1 + 10;
// nyawa = nyawa - 1;
// levelgame = levelgame + 1;

skor1 += 10;  // +, - , %, /, *
skor1Teks.textContent = skor1.toString();
nyawa -= 1;
levelgame += 1;

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

console.log("Nama Pemain: ", namaPemain1);
console.log("Skor: ", skor1);
console.log("Nyawa: ", nyawa);
console.log("Level Game: ", levelgame);
console.log("Game Over: ", gameOver1);
console.log("Game Pause: ", gamePause);

skor1 = 100;
levelgame = 2;

console.log("Skor berubah: ", skor1);
console.log("Level Game berubah: ", levelgame);

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// ctx.fillStyle = "lime";
// ctx.fillRect(tubuhUlar1[0].x, tubuhUlar1[0].y, 20, 20);
// ctx.fillRect(tubuhUlar1[1].x, tubuhUlar1[1].y, 30, 30);
// ctx.fillRect(tubuhUlar1[2].x, tubuhUlar1[2].y, 30, 30);

tubuhUlar1.forEach((bagian, index) => {
  if (index === 0) {
    ctx.fillStyle = "blue";
  } else if (index === 1 || index === 3) {
    ctx.fillStyle = "lime";
  } else {
    ctx.fillStyle = "yellow";
  }
  ctx.fillRect(bagian.x, bagian.y, 20, 20);
});

ctx.fillStyle = "red";
ctx.fillRect(apel1[0].x, apel1[0].y, 20, 20);
ctx.fillRect(apel1[1].x, apel1[1].y, 20, 20);
ctx.fillRect(apel1[2].x, apel1[2].y, 20, 20);
ctx.fillRect(apel1[3].x, apel1[3].y, 20, 20);

ctx.fillStyle = rintangan1[0].color;
ctx.fillRect(rintangan1[0].x, rintangan1[0].y, rintangan1[0].width, rintangan1[0].height);

ctx.fillStyle = rintangan1[1].color;
ctx.fillRect(rintangan1[1].x, rintangan1[1].y, rintangan1[1].width, rintangan1[1].height);

if (
  tubuhUlar1[0].x === apel1[0].x &&
  tubuhUlar1[0].y === apel1[0].y
) {
  skor1 += 10;
  console.log("Apel Dimakan");
  console.log("Skor: ", skor1);
} 
else {
  console.log("Apel Tidak Dimakan");
}

if (nyawa <= 0) {
  console.log("Game Over");
}
else if (nyawa === 1) {
  console.log("Nyawa tersisa 1");
} else {
  console.log("Aman Bosku Nyawa tersisa: ", nyawa);
}
if (levelgame === 1) {
  console.log("Level 1");
}