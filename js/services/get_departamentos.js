export async function getDepartamentos() {
    const REQ = await fetch("http://172.16.11.12/backend/get_departamentos.php", {
        method:"GET",
    });

    const RES = await REQ.json();
    return RES;
}