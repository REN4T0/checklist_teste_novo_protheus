export async function getAtividades(userID) {
        const REQ = await fetch("http://172.16.11.12/backend/get_atividades.php", {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({
                usuario_id: Number(userID)
            })
        });
    
        const RES = await REQ.json()
        return RES;
}