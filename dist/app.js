"use strict";
const developers = [
    {
        foto: "img/ricky.jpeg",
        nama: "Ricky Alif Pratama",
        role: "-",
        linkedin: "#",
        instagram: "#"
    },
    {
        foto: "img/rizki.png",
        nama: "Rizki (Prabowo) Romadona",
        role: "-",
        linkedin: "https://www.linkedin.com/in/rizki-romadona-568287338/",
        instagram: "#"
    },
    {
        foto: "img/hambali.jpeg",
        nama: "Hambali Fitrianto",
        role: "-",
        linkedin: "https://www.linkedin.com/in/hambali-fitrianto/",
        instagram: "https://www.instagram.com/capt_msf/"
    },
    {
        foto: "img/sigit.png",
        nama: "Sigit Wicaksono",
        role: "-",
        linkedin: "https://www.linkedin.com/in/sigit-wicaksono-97b4b2215/",
        instagram: "https://www.instagram.com/sigit3670/"
    },
    {
        foto: "img/ahmad.jpeg",
        nama: "Ahmad Ridho Mulia",
        role: "-",
        linkedin: "https://www.linkedin.com/in/ahmad-ridho-mulia-401274343/",
        instagram: "#"
    },
    {
        foto: "img/arya.jpeg",
        nama: "Arya Prayogi Utama",
        role: "-",
        linkedin: "https://www.linkedin.com/in/aryaprayogiutama1/",
        instagram: "#"
    },
    {
        foto: "img/agus.jpeg",
        nama: "Moh. Agus Safi I",
        role: "-",
        linkedin: "https://www.linkedin.com/in/moh-agus-safi-i-b86850299/",
        instagram: "#"
    }
];
/* LINKEDIN ICON — TETAP PUNYAMU */
function iconLinkedin() {
    return `
<svg viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor">
<path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.3h-3v-5.6c0-3.37-4-3.12-4 0v5.6h-3v-10h3v1.53c1.4-2.59 7-2.78 7 2.48v6z"/>
</svg>`;
}
/* 🔥 INSTAGRAM ICON BARU — CUMA INI YANG DIGANTI BOS */
function iconInstagram() {
    return `
<svg viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor">
<path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm8.4 2H7.8C5.7 4 4 5.7 4 7.8v8.4c0 2.1 1.7 3.8 3.8 3.8h8.4c2.1 0 3.8-1.7 3.8-3.8V7.8C20 5.7 18.3 4 16.2 4zm-4.2 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.2-2.5a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
</svg>`;
}
function render(dev, i) {
    return `
<div class="card-anim glass rounded-3xl p-6 text-center"
style="animation-delay:${i * .15}s">

<img src="${dev.foto}"
onerror="this.src='https://via.placeholder.com/120'"
class="w-28 h-28 rounded-full mx-auto object-cover ring-4 ring-cyan-400/30">

<div class="mt-4 font-semibold text-white text-lg">
  ${dev.nama}
</div>

<div class="mt-1 inline-block px-3 py-1 bg-white/20 text-sm rounded-xl text-white">
  ${dev.role}
</div>

<p class="text-xs text-slate-300 mt-2">
  Pawindo Group Technology Division
</p>

<div class="mt-4 flex gap-5 justify-center">

  <a href="${dev.linkedin}" target="_blank"
  class="text-cyan-300 hover:text-cyan-200 hover:scale-125 transition">
    ${iconLinkedin()}
  </a>

  <a href="${dev.instagram}" target="_blank"
  class="text-pink-300 hover:text-pink-200 hover:scale-125 transition">
    ${iconInstagram()}
  </a>

</div>

</div>`;
}
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    if (!app)
        return;
    developers.forEach((d, i) => {
        app.innerHTML += render(d, i);
    });
    document.title = "Tim Developer – Pawindo Group";
});
