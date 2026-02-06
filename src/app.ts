import { developers, Developer } from "./data.js";

const app = document.getElementById("app") as HTMLElement;

function render(dev: Developer) {
    return `
    <div class="card">
        <img src="${dev.foto}" onerror="this.src='https://via.placeholder.com/100'">
        <div class="nama">${dev.nama}</div>
        <div class="role">${dev.role}</div>
    </div>`;
}

developers.forEach(d => {
    app.innerHTML += render(d);
});