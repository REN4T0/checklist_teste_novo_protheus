import { getAtividades } from "../services/get_atividades.js";
import { postUsuario } from "../services/post_usuario_service.js";
import { postAtividadeFeita } from "../services/post_atividade_feita_service.js";
// import { CHECKLISTS } from "../components/checklists_component.js";
import { VALID_USERS } from "../components/valid_users_component.js";
import { HOME } from "../routes/routes.js";
const TABLE_BODY = document.querySelector("tbody");
const TABLE_DATA_VALUES = [];

function loadChecklistTable(list) {
    console.log(list);

    for (let item of list) {
        const TABLE_ROW = document.createElement("tr");

        const CHECKBOX = document.createElement("input");
        CHECKBOX.type = "checkbox";
        CHECKBOX.id = item.id;
        CHECKBOX.classList.add("checkbox");

        if(item.concluido) CHECKBOX.checked = true;

        const INPUT_TASK = document.createElement("input");
        INPUT_TASK.type = "text";
        INPUT_TASK.readOnly = true;
        INPUT_TASK.value = item.atividade;
        INPUT_TASK.id = `task${item.id}`;

        TABLE_DATA_VALUES.push(CHECKBOX);
        TABLE_DATA_VALUES.push(INPUT_TASK);

        for (let element of TABLE_DATA_VALUES) {
            const TABLE_DATA = document.createElement("td");
            TABLE_DATA.appendChild(element);
            TABLE_ROW.appendChild(TABLE_DATA);
        }

        TABLE_BODY.appendChild(TABLE_ROW);
        TABLE_DATA_VALUES.length = 0;
    }
}

const CLOSE_MODAL = () => document.querySelector("div.modal-background").remove();
const STANDARD_MSG = () => console.log("O usuário inserido não tem permissão para acessar essa lista de atividades.");

async function findDepartamento(usuario, departamentoID) {
    // const URL_PARAMS = new URLSearchParams(window.location.search);
    // const SELECTED_CONTENT = URL_PARAMS.get('content');
 
    let currentUser;
    switch (departamentoID) {
        case "1":
            if (VALID_USERS.compras.includes(usuario)) {
                currentUser = await postUsuario(usuario, departamentoID);
                console.log(currentUser);
                localStorage.setItem("current_user_id", currentUser.id_usuario);
                loadChecklistTable(await getAtividades(currentUser.id_usuario));
                CLOSE_MODAL();
            } else { STANDARD_MSG(); }

            break;
        case "2":
            
            if (VALID_USERS.faturamento.includes(usuario)) {
                currentUser = await postUsuario(usuario, departamentoID);
                console.log(currentUser);
                localStorage.setItem("current_user_id", currentUser.id_usuario);
                loadChecklistTable(await getAtividades(currentUser.id_usuario));
                CLOSE_MODAL();
            } else { STANDARD_MSG(); }

            break;
        case "3":
            if (VALID_USERS.contabilidade.includes(usuario)) {
                currentUser = await postUsuario(usuario, departamentoID);
                console.log(currentUser);
                localStorage.setItem("current_user_id", currentUser.id_usuario);
                loadChecklistTable(await getAtividades(currentUser.id_usuario));
                CLOSE_MODAL();
            } else { STANDARD_MSG(); }
            
            break;
        case "4":
            if (VALID_USERS.livros_fiscais.includes(usuario)) {
                currentUser = await postUsuario(usuario, departamentoID);
                console.log(currentUser);
                localStorage.setItem("current_user_id", currentUser.id_usuario);
                loadChecklistTable(await getAtividades(currentUser.id_usuario));
                CLOSE_MODAL();
            } else { STANDARD_MSG(); }

            break;
        case "5":
            if (VALID_USERS.financeiro.includes(usuario)) {
                currentUser = await postUsuario(usuario, departamentoID);
                console.log(currentUser);
                localStorage.setItem("current_user_id", currentUser.id_usuario);
                loadChecklistTable(await getAtividades(currentUser.id_usuario));
                CLOSE_MODAL();
            } else { STANDARD_MSG(); }

            break;
        case "6":
            if (VALID_USERS.financeiro.includes(usuario)) {
                currentUser = await postUsuario(usuario, departamentoID);
                console.log(currentUser);
                localStorage.setItem("current_user_id", currentUser.id_usuario);
                loadChecklistTable(await getAtividades(currentUser.id_usuario));
                CLOSE_MODAL();
            } else { STANDARD_MSG(); }

            break;
        case "7":
            if (VALID_USERS.estoque.includes(usuario)) {
                currentUser = await postUsuario(usuario, departamentoID);
                console.log(currentUser);
                localStorage.setItem("current_user_id", currentUser.id_usuario);
                loadChecklistTable(await getAtividades(currentUser.id_usuario));
                CLOSE_MODAL();
            } else { STANDARD_MSG(); }

            break;
        case "8":
            if (VALID_USERS.pcpmgg.includes(usuario)) {
                currentUser = await postUsuario(usuario, departamentoID);
                console.log(currentUser);
                localStorage.setItem("current_user_id", currentUser.id_usuario);
                loadChecklistTable(await getAtividades(currentUser.id_usuario));
                CLOSE_MODAL();
            } else { STANDARD_MSG(); }

            break;
        case "9":
            if (VALID_USERS.pcpmgn.includes(usuario)) {
                currentUser = await postUsuario(usuario, departamentoID);
                console.log(currentUser);
                localStorage.setItem("current_user_id", currentUser.id_usuario);
                loadChecklistTable(await getAtividades(currentUser.id_usuario));
                CLOSE_MODAL();
            } else { STANDARD_MSG(); }

            break;
        default:
            console.log("Essa checklist não existe");
            break;
    }
};

document.addEventListener("click", async (e) => {
    let el = e.target;

    if (el.id === "login") {
        const URL_PARAMS = new URLSearchParams(window.location.search);
        const SELECTED_CONTENT = URL_PARAMS.get('content');

        findDepartamento(document.querySelector("input#usuario").value, SELECTED_CONTENT);
    }

    if(el.classList.contains("checkbox")){
        const TASK_INFO = {
            feito: el.checked,
            usuario_id: localStorage.getItem("current_user_id"),
            task_id: el.id
        };

        console.log(await postAtividadeFeita(TASK_INFO));
    }

    if(el.id === "sair") window.location.href = HOME;
});

document.addEventListener("DOMContentLoaded", () => {
    localStorage.clear();
});
