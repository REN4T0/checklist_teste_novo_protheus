export async function APItest() {
    const req = await fetch("http://172.16.11.12/backend/teste.php", {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
            saudacao: "hello world!"
        })
    });

    const res = await req.json();
    return res;
    
}