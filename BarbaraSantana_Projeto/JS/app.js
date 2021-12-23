document.getElementById('home').addEventListener('click', home);
document.getElementById('pessoal').addEventListener('click', pessoal);
document.getElementById('contato').addEventListener('click', contato);
document.getElementById('btnEnviar').addEventListener('click', formValidation);

function home() {
    window.location.href = "/HTML/home.html";
}

function pessoal() {
    window.location.href = "/HTML/pessoal.html";
}

function contato() {
    window.location.href = "/HTML/contato.html";
}

function formValidation() {
    let form = document.forms.namedItem("contato");
    if (form == "") {
        console.log("Preencha os campos.");
    }
}