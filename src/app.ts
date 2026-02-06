interface Developer {
  foto: string;
  nama: string;
  role: string;
  linkedin: string;
  instagram: string;
}

const developers: Developer[] = [
  {
    foto: "img/hambali.jpeg",
    nama: "Hambali Fitrianto",
    role: "-",
    linkedin: "https://www.linkedin.com/in/hambali-fitrianto/",
    instagram: "https://www.instagram.com/capt_msf/"
  },
  {
    foto: "img/rizki.png",
    nama: "Rizki (Prabowo) Romadona",
    role: "-",
    linkedin: "#",
    instagram: "#"
  },
  {
    foto: "img/sigit.png",
    nama: "Sigit Wicaksono",
    role: "-",
    linkedin: "#",
    instagram: "#"
  }
];

function iconLinkedin() {
return `
<svg viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor">
<path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.3h-3v-5.6c0-3.37-4-3.12-4 0v5.6h-3v-10h3v1.53c1.4-2.59 7-2.78 7 2.48v6z"/>
</svg>`;
}

function iconInstagram() {
return `
<svg viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor">
<path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3a5 5 0 110 10 5 5 0 010-10z"/>
</svg>`;
}

function render(dev: Developer, i: number) {

return `
<div class="
  card-anim glass rounded-3xl p-6 text-center
  hover:scale-[1.02] transition duration-300
"
style="animation-delay:${i * .15}s"
>

<img src="${dev.foto}"
onerror="this.src='https://via.placeholder.com/120'"
class="w-28 h-28 rounded-full mx-auto object-cover ring-4 ring-cyan-400/30">

<div class="mt-4 font-semibold text-white text-lg">
  ${dev.nama}
</div>

<div class="
  mt-1 inline-block px-3 py-1
  bg-white/20 text-sm rounded-xl text-white
">
  ${dev.role}
</div>

<p class="text-xs text-slate-300 mt-2">
  Pawindo Group Technology Division
</p>

<div class="mt-4 flex gap-5 justify-center">

  <a href="${dev.linkedin}" target="_blank"
  class="text-cyan-300 hover:text-cyan-200 hover:scale-110 transition">
    ${iconLinkedin()}
  </a>

  <a href="${dev.instagram}" target="_blank"
  class="text-pink-300 hover:text-pink-200 hover:scale-110 transition">
    ${iconInstagram()}
  </a>

</div>

</div>`;
}

document.addEventListener("DOMContentLoaded", () => {

const app = document.getElementById("app");
if (!app) return;

developers.forEach((d,i) => {
  app.innerHTML += render(d,i);
});

document.title = "Tim Developer – Pawindo Group";
});