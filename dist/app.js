"use strict";
const developers = [
    {
        foto: "img/hambali.jpeg",
        nama: "Hambali Fitrianto",
        role: "Software Developer"
    },
    {
        foto: "img/rizki.png",
        nama: "Rizki (Prabowo) Romadona",
        role: "Backend Developer"
    },
    {
        foto: "img/sigit.png",
        nama: "Sigit Wicaksono",
        role: "Frontend Developer"
    }
];
function render(dev) {
    return `
<div class="
  bg-white rounded-2xl p-5 text-center
  shadow hover:shadow-lg transition duration-300
  border border-slate-100
">

  <img
    src="${dev.foto}"
    onerror="this.src='https://via.placeholder.com/120'"
    class="w-28 h-28 rounded-full mx-auto object-cover border-4 border-blue-100"
  >

  <div class="mt-4 font-semibold text-slate-800">
    ${dev.nama}
  </div>

  <div class="
    mt-1 inline-block px-3 py-1
    bg-blue-50 text-sm rounded-lg text-blue-700
  ">
    ${dev.role}
  </div>

  <p class="text-xs text-gray-400 mt-2">
    Pawindo Group Technology Division
  </p>

</div>`;
}
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    if (!app)
        return;
    developers.forEach(d => {
        app.innerHTML += render(d);
    });
    document.title = "Tim Developer – Pawindo Group";
});
