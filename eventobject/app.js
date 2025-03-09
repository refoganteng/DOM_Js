document.querySelector("button").addEventListener("click", (e) => {
  console.log(e);
});

const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("Tombol Arah Atas");
      break;
    case "ArrowDown":
      console.log("Tombol Arah Bawah");
      break;
    case "ArrowLeft":
      console.log("Tombol Arah Kiri");
      break;
    case "ArrowRight":
      console.log("Tombol Arah Kanan");
      break;
    case "KeyE":
      console.log("Tombol Huruf E");
      break;
    default:
      console.log(`tombol yg kamu pencet adalah ${e.code}`);
  }
});

// input.addEventListener('keyup', () => {
// 	console.log('Tombol dirilis');
// });


