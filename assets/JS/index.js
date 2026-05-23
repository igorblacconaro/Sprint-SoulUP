let div = document.getElementsByClassName("chamada__txt")[0]
let heade = document.getElementsByTagName("header")[0]
let fundo = document.getElementsByTagName("body")[0]
let paragrafo = document.getElementsByTagName("p")[0]
let titulo = document.getElementsByTagName("h1")[0]
let card1 = document.getElementsByTagName("section")[1]
let p1 = document.getElementsByTagName("p") [2]
let card2 = document.getElementsByTagName("section")[2]
let p2 = document.getElementsByTagName("p") [3]
let card3 = document.getElementsByTagName("section")[3]
let p3 = document.getElementsByTagName("p") [4]
let card4 = document.getElementsByTagName("section")[4]
let p4 = document.getElementsByTagName("p") [5]
let card5 = document.getElementsByTagName("section")[5]
let p5 = document.getElementsByTagName("p") [6]
let h2 = document.getElementsByClassName("header_card") [0]
let h21 = document.getElementsByClassName("header_card") [1]
let h22 = document.getElementsByClassName("header_card") [2]
let h23 = document.getElementsByClassName("header_card") [3]
let h24 = document.getElementsByClassName("header_card") [4]



function escuro() {
    div.setAttribute("class", "chamada__txt__escuro");
    heade.setAttribute("class", "cabecalho__escuro");
    fundo.setAttribute("class", "body__escuro");
    titulo.setAttribute("class", "titulo__escuro");
    paragrafo.setAttribute("class", "paragrafo__escuro");  
    h2.setAttribute("class", "h2__index__escuro");
    h21.setAttribute("class", "h2__index__escuro");
    h22.setAttribute("class", "h2__index__escuro");
    h23.setAttribute("class", "h2__index__escuro");
    h24.setAttribute("class", "h2__index__escuro");
    card1.style.backgroundColor="#003033cc";
    // p1.style.color="#fff"
    card2.style.backgroundColor="#003033cc";
    // p2.style.color="#fff"
    card3.style.backgroundColor="#003033cc";
    // p3.style.color="#fff"
    card4.style.backgroundColor="#003033cc";
    // p4.style.color="#fff"
    card5.style.backgroundColor="#003033cc";
    // p5.style.color="#fff"

}

function claro() {
    window.location.reload()
}
let botaoEscuro = document.getElementById("noite")
botaoEscuro.addEventListener("click", escuro)

let botaoClaro = document.getElementById("luz")
botaoClaro.addEventListener("click", claro)

const botaoMenu = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");

    if (menu.classList.contains("ativo")) {
        botaoMenu.textContent = "✖";
    } else {
        botaoMenu.textContent = "☰";
    }
});