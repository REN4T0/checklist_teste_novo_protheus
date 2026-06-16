import { CHECKLISTS } from "../components/checklists_component.js";
const TABLE_BODY = document.querySelector("tbody");
const TABLE_DATA_VALUES = [];

function loadChecklistTable(list) {
    console.log(list);

    for(let item of list) {
        const TABLE_ROW = document.createElement("tr");

        const CHECKBOX = document.createElement("input");
        CHECKBOX.type = "checkbox";

        const INPUT_TASK = document.createElement("input");
        INPUT_TASK.type = "text";
        INPUT_TASK.readOnly = true;
        INPUT_TASK.value = item;

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

document.addEventListener("DOMContentLoaded", () => {
    const URL_PARAMS = new URLSearchParams(window.location.search);
    const SELECTED_CONTENT = URL_PARAMS.get('content');
    console.log(SELECTED_CONTENT);

    switch(SELECTED_CONTENT){
        case "COMPRAS":
            loadChecklistTable(CHECKLISTS.compras)
            break;
        case "FATURAMENTO":
            loadChecklistTable(CHECKLISTS.faturamento);
            break;
        case "CONTABILIDADE":
            loadChecklistTable(CHECKLISTS.contabilidade);
            break;
        case "LIVROS FISCAIS":
            loadChecklistTable(CHECKLISTS.livros_fiscais);
            break;
        case "FINANCEIRO - CP":
            loadChecklistTable(CHECKLISTS.financeiro);
            break;
        case "FINANCEIRO - CR":
            loadChecklistTable(CHECKLISTS.contas_receber);
            break;
        case "ESTOQUE":
            loadChecklistTable(CHECKLISTS.contas_pagar);
            break;
        case "PCP - MGGOLD":
            loadChecklistTable(CHECKLISTS.pcp_mggold);
            break;
        case "PCP - MAGNUM":
            loadChecklistTable(CHECKLISTS.pcp_magnum);
            break;
        default:
            console.log("Essa checklist não existe");
            break;
    }
});