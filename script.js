const arrow = document.querySelector(".arrow");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 128) arrow.style.opacity = 1;
  else arrow.style.opacity = 0;
});

const tanggalElement = document.querySelector(".tanggal");

const hariIndonesia = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const bulanIndonesia = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

const sekarang = new Date();
const hari = hariIndonesia[sekarang.getDay()];
const tanggal = sekarang.getDate();
const bulan = bulanIndonesia[sekarang.getMonth()];
const tahun = sekarang.getFullYear();

tanggalElement.innerHTML = `${hari}, ${tanggal} ${bulan} ${tahun}`;
