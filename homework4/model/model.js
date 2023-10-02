let modal = document.getElementById("modal");
let modalContent = document.getElementById("modalContent");
let modalSuccess = document.getElementById("modalSuccess");

export function openModal() {
    modal.classList.toggle("openModal");
    modal.classList.toggle("hidden");
}

export function nextModal() {
    modalContent.classList.toggle("hidden");
    modalContent.classList.toggle("openModalContent");
    console.log("modalContent:" + modalContent.classList);
    modalSuccess.classList.toggle("openModal");
    modalSuccess.classList.toggle("hidden");
    console.log("modalSuccess:" + modalSuccess.classList);


    console.log("settingTimeout");
    setTimeout(loadNextPage, 1500);
}

function loadNextPage() {
    window.location.href = "loginPage.html";
}