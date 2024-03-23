const arrow = document.querySelector(".arrow");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 128) arrow.style.opacity = 1;
  else arrow.style.opacity = 0;
});

function tanggal() {
  const hariIndonesia = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const bulanIndonesia = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  const sekarang = new Date();
  const hari = hariIndonesia[sekarang.getDay()];
  const tanggal = sekarang.getDate();
  const bulan = bulanIndonesia[sekarang.getMonth()];
  const tahun = sekarang.getFullYear();

  return `${hari}, ${tanggal} ${bulan} ${tahun}`;
}

const tanggalElement = document.querySelector(".tanggal");
tanggalElement.innerHTML = tanggal();

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("content-main-title")) {
    const parentElement = e.target.parentElement.parentElement;
    const content = parentElement.querySelector(".content-container");
    content.classList.toggle("closed");
    if (content.classList.contains("closed")) {
      content.style.height = "0";
      document.querySelector(".expand").style.transform = "rotate(-180deg)";
    } else {
      content.style.height = `${content.scrollHeight}px`;
      document.querySelector(".expand").style.transform = "rotate(0deg)";
    }
  }
});

const navbar = document.querySelector("header");
const links = document.querySelectorAll("header nav ul li a");

let prevScrollpos = window.scrollY;
let scrolling = false;

window.onscroll = function () {
  if (!scrolling) {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = `calc(-${navbar.clientHeight}px - .1rem)`;
    }
    prevScrollpos = currentScrollPos;
  }
};

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href").substring(1);

    scrolling = true;

    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });

    setTimeout(() => {
      scrolling = false;
    }, 1000);
  });
});
