export async function postUsuario(usuario, departamentoID){
    console.log(usuario, departamentoID);

    const REQ = await fetch("http://172.16.11.12/backend/post_usuario.php", {
        method: "POST",
        headers: {
            "content-type":"aplication/json"
        },
        body: JSON.stringify({
            user: usuario,
            departamento: Number(departamentoID)
        })
    })

    const RES = REQ.json();
    return RES;
}