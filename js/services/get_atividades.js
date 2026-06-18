export async function getAtividades(departamentoID, userID) {
    const REQ = await fetch("http://172.16.11.12/backend/get_atividades.php", {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
            departamento_id: Number(departamentoID),
            usuario_id: Number(userID)
        })
    });

    const RES = await REQ.json()
    return RES;
}