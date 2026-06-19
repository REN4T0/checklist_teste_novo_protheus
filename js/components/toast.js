export function showToast(alertMsg, icon) {
    const TOAST = document.querySelector(".toast");
    document.querySelector(".toast p").innerText = alertMsg;
    document.querySelector(".toast img").src = `../icons/${icon}`;

    TOAST.style.right = "2vw";

    setTimeout(() => {
        TOAST.style.right = "-30vw";
    }, 3000);
}