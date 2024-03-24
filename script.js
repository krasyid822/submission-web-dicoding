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

document.querySelectorAll(".content-container").forEach((content) => {
  if (!content.classList.contains("closed")) {
    content.style.maxHeight = `${content.scrollHeight}px`;
  }
});

window.addEventListener("resize", () => {
  document.querySelectorAll(".content-container").forEach((content) => {
    if (!content.classList.contains("closed")) {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  });
});

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("content-main-title")) {
    const parentElement = e.target.parentElement.parentElement;
    const content = parentElement.querySelector(".content-container");
    content.classList.toggle("closed");
    const expand = e.target.querySelector(".expand");
    if (content.classList.contains("closed")) {
      content.style.maxHeight = "0";
      expand.style.transform = "rotate(-180deg)";
      if (parentElement.id === "sahur") content.style.paddingBlockEnd = "0";
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
      expand.style.transform = "rotate(0deg)";
      if (parentElement.id === "sahur") content.style.paddingBlockEnd = "1rem";
    }
  }
});

const navbar = document.querySelector("header");
const links = document.querySelectorAll("header nav ul li a");

let prevScrollpos = window.scrollY;
let scrolling = false;

function handleScroll() {
  if (!scrolling) {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = `-${navbar.clientHeight}px`;
    }
    prevScrollpos = currentScrollPos;
  }
}

window.addEventListener("scroll", handleScroll);

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    scrolling = true;
    setTimeout(() => {
      navbar.style.top = "0";
      scrolling = false;
      window.removeEventListener("scroll", handleScroll);
      setTimeout(() => {
        window.addEventListener("scroll", handleScroll);
      }, 500);
    }, 500);
  });
});
