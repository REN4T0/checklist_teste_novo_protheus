import { getAtividades } from "../services/get_atividades.js";
import { CHECKLISTS } from "../components/checklists_component.js";
const TABLE_BODY = document.querySelector("tbody");
const TABLE_DATA_VALUES = [];

function loadChecklistTable(list) {
    for(let item of list) {
        const TABLE_ROW = document.createElement("tr");

        const CHECKBOX = document.createElement("input");
        CHECKBOX.type = "checkbox";
        CHECKBOX.id = item.id;

        const INPUT_TASK = document.createElement("input");
        INPUT_TASK.type = "text";
        INPUT_TASK.readOnly = true;
        INPUT_TASK.value = item.atividade;
        INPUT_TASK.id = `task${item.id}`;

        TABLE_DATA_VALUES.push(CHECKBOX);
        TABLE_DATA_VALUES.push(INPUT_TASK);

        for(let element of TABLE_DATA_VALUES) {
            const TABLE_DATA = document.createElement("td");
            TABLE_DATA.appendChild(element);
            TABLE_ROW.appendChild(TABLE_DATA);
        }

        TABLE_BODY.appendChild(TABLE_ROW);
        TABLE_DATA_VALUES.length = 0;
    }
}

async function findDepartamento(){
    const URL_PARAMS = new URLSearchParams(window.location.search);
    const SELECTED_CONTENT = URL_PARAMS.get('content');

    switch(SELECTED_CONTENT){
        case "1":
            loadChecklistTable(await getAtividades(SELECTED_CONTENT));
            break;
        case "2":
            loadChecklistTable(await getAtividades(SELECTED_CONTENT));
            break;
        case "3":
            loadChecklistTable(await getAtividades(SELECTED_CONTENT));
            break;
        case "4":
            loadChecklistTable(await getAtividades(SELECTED_CONTENT));
            break;
        case "5":
            loadChecklistTable(await getAtividades(SELECTED_CONTENT));
            break;
        case "6":
            loadChecklistTable(await getAtividades(SELECTED_CONTENT));
            break;
        case "7":
            loadChecklistTable(await getAtividades(SELECTED_CONTENT));
            break;
        case "8":
            loadChecklistTable(await getAtividades(SELECTED_CONTENT));
            break;
        case "9":
            loadChecklistTable(await getAtividades(SELECTED_CONTENT));
            break;
        default:
            console.log("Essa checklist não existe");
            break;
    }
};

document.addEventListener("click", (e) => {
    let el = e.target;
    console.log(el.id);

    if(el.id === "login"){
        findDepartamento();
        document.querySelector("div.modal-background").remove();
    }
})
