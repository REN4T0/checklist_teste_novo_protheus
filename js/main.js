import { DEPARTAMENTOS } from "./components/departamento_component.js";
import { CHEKLIST_PAGE } from "./routes/routes.js";
import { APItest } from "./services/test.js";
const DEPARTAMENTOS_MAIN = document.querySelector("#departamentos");

document.addEventListener("DOMContentLoaded", async () => {
    for(let departamento of DEPARTAMENTOS) {
        const BUTTON = document.createElement("button");
        BUTTON.innerText = departamento;
        BUTTON.id = departamento;
        DEPARTAMENTOS_MAIN.appendChild(BUTTON);
    };

    console.log(await APItest());
});

document.addEventListener("click", (e) => {
    let el = e.target;

    if(DEPARTAMENTOS.includes(el.id)){
        window.location.href = `${CHEKLIST_PAGE}?content=${el.id}`;
    }
});

