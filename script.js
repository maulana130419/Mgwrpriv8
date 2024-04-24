// Tentukan tanggal pernikahan
var weddingDate = new Date("May 15, 2024 16:00:00").getTime();

// Perbarui hitungan mundur setiap 1 detik
var countdownInterval = setInterval(function() {
  var now = new Date().getTime();
  var distance = weddingDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

function openInvitation() {
  var landingPage = document.getElementById("landingPage");
  var invitation = document.getElementById("invitation");

  landingPage.style.animation = "fadeout 1s";
  invitation.style.display = "block";
  setTimeout(function() {
    landingPage.style.display = "none";
  }, 1000);
  
  // Tambahkan efek audio di sini
}
