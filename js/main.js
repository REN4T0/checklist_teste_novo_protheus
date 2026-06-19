import { getDepartamentos } from "./services/get_departamentos.js";
import { CHEKLIST_PAGE } from "./routes/routes.js";
import { APItest } from "./services/test.js";
import { showToast } from "./components/toast.js";

const DEPARTAMENTOS_MAIN = document.querySelector("#departamentos");
let departamentos;

document.addEventListener("DOMContentLoaded", async () => {
    localStorage.clear();

    departamentos = await getDepartamentos();
    
    if(departamentos.status === "error"){
        showToast(departamentos.msg, "error.svg");
    } else {
        for(let departamento of departamentos) {
            const BUTTON = document.createElement("button");
            BUTTON.innerText = departamento.departamentos;
            BUTTON.id = departamento.id;
            DEPARTAMENTOS_MAIN.appendChild(BUTTON);
        };
    }
});

document.addEventListener("click", (e) => {
    let el = e.target;

    if(departamentos.some(d => String(d.id) === el.id)){
        window.location.href = `${CHEKLIST_PAGE}?content=${el.id}`;
    }
});

