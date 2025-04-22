// Menambahkan foto pacar yang berubah secara acak
const photos = [
  "images/pacar1.jpeg",
  "images/pacar2.jpeg",
  "images/pacar3.jpeg",
  "images/pacar4.jpeg",
  "images/pacar5.jpeg", // Foto pacar kamu
];

const photoElement = document.getElementById('photo');
let photoIndex = 0;

setInterval(() => {
  photoIndex = (photoIndex + 1) % photos.length;
  photoElement.src = photos[photoIndex];
}, 3000); // Ganti foto setiap 5 detik

// Animasi foto pacar yang jatuh di seluruh halaman
setInterval(() => {
  const photo = document.createElement("img");
  photo.src = photos[Math.floor(Math.random() * photos.length)];
  photo.className = "falling-photo";
  photo.style.left = Math.random() * 100 + "vw"; // Posisi acak di layar
  document.querySelector(".falling-photos").appendChild(photo);

  // Menghapus foto setelah animasi selesai
  setTimeout(() => photo.remove(), 4000); // Menghapus foto setelah 4 detik
}, 1500); // Foto jatuh setiap 1,5 detik
// Animasi emoji love jatuh di seluruh halaman
setInterval(() => {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw"; // posisi horizontal acak
  heart.style.fontSize = Math.random() * 20 + 20 + "px"; // ukuran acak 20–40px
  document.querySelector(".heart-animation").appendChild(heart);

  // Hapus setelah animasi selesai
  setTimeout(() => heart.remove(), 5000);
}, 800); // love jatuh setiap 0.8 detik

function toggleMusic() {
  const audio = document.getElementById("bg-music");
  const playIcon = document.getElementById("play-icon");
  const pauseIcon = document.getElementById("pause-icon");

  if (audio.paused) {  // Jika musik belum diputar
    audio.play();  // Putar musik
    playIcon.style.display = "none";  // Sembunyikan ikon play
    pauseIcon.style.display = "inline";  // Tampilkan ikon pause
  } else {
    audio.pause();  // Jika musik sedang diputar, hentikan
    playIcon.style.display = "inline";  // Tampilkan ikon play
    pauseIcon.style.display = "none";  // Sembunyikan ikon pause
  }
}


