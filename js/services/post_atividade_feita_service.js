export async function postAtividadeFeita(taskInfo){
    const REQ = await fetch("http://172.16.11.12/backend/post_atividade_feita.php", {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(taskInfo)
    });

    const RES = REQ.json();
    return RES;
}