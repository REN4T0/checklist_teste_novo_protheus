export async function getAtividades(id) {
    const REQ = await fetch("http://172.16.11.12/backend/get_atividades.php", {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
            id: Number(id)
        })
    });

    const RES = await REQ.json()
    return RES;
}