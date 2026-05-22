class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

function criarModal() {
    const modal = document.createElement("div");

    modal.id = "modal_mensagem";

    modal.innerHTML = `
        <div class="modal_conteudo">
            <h2 id="modal_titulo"></h2>
            <p id="modal_texto"></p>
            <button id="modal_botao">OK</button>
        </div>
    `;

    document.body.appendChild(modal);

    const botao = document.querySelector("#modal_botao");

    botao.addEventListener("click", function () {
        modal.style.display = "none";
    });
}

function mostrarModal(titulo, mensagem, redirecionar = null) {
    const modal = document.querySelector("#modal_mensagem");
    const modalTitulo = document.querySelector("#modal_titulo");
    const modalTexto = document.querySelector("#modal_texto");
    const modalBotao = document.querySelector("#modal_botao");

    modalTitulo.textContent = titulo;
    modalTexto.textContent = mensagem;

    modal.style.display = "flex";

    modalBotao.onclick = function () {
        modal.style.display = "none";

        if (redirecionar !== null) {
            window.location.href = redirecionar;
        }
    };
}

criarModal();

const formularioCadastro = document.querySelector("#form_cadastro");
const formularioLogin = document.querySelector("#form_login");

if (formularioCadastro) {
    formularioCadastro.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.querySelector("#nome").value.trim();
        const email = document.querySelector("#email").value.trim();
        const senha = document.querySelector("#senha").value.trim();
        const confirmarSenha = document.querySelector("#confirmar_senha").value.trim();

        if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
            mostrarModal("Erro", "Preencha todos os campos.");
            return;
        }

        if (senha !== confirmarSenha) {
            mostrarModal("Erro", "As senhas não são iguais.");
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const emailJaExiste = usuarios.some(function (usuario) {
            return usuario.email === email;
        });

        if (emailJaExiste) {
            mostrarModal("Erro", "Este e-mail já está cadastrado.");
            return;
        }

        const novoUsuario = new Usuario(nome, email, senha);

        usuarios.push(novoUsuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        mostrarModal("Sucesso", "Cadastro realizado com sucesso!", "./login.html");
    });
}

if (formularioLogin) {
    formularioLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.querySelector("#email").value.trim();
        const senha = document.querySelector("#senha").value.trim();

        if (email === "" || senha === "") {
            mostrarModal("Erro", "Preencha todos os campos.");
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuarioEncontrado = usuarios.find(function (usuario) {
            return usuario.email === email && usuario.senha === senha;
        });

        if (usuarioEncontrado) {
            localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

            mostrarModal(
                "Login realizado",
                `Bem-vindo, ${usuarioEncontrado.nome}!`,
                "../index.html"
            );
        } else {
            mostrarModal("Erro", "E-mail ou senha incorretos.");
        }
    });
}
let heade = document.getElementsByTagName("header")[0];
let fundo = document.getElementsByTagName("body")[0];
let titulo = document.getElementsByTagName("h1")[0];
let fieldset = document.getElementsByTagName("fieldset")[0];
let labels = document.getElementsByTagName("label");
let paragrafos = document.getElementsByTagName("p");
let inputs = document.getElementsByTagName("input");
let links = document.getElementsByTagName("a");
let botaoSubmit = document.querySelector("button[type='submit']");

function escuro() {
    fundo.classList.add("body__escuro");
    heade.classList.add("cabecalho__escuro");

    if (titulo) {
        titulo.classList.add("titulo__escuro");
    }

    if (fieldset) {
        fieldset.style.backgroundColor = "#003033cc";
        fieldset.style.borderColor = "#ffffff";
    }

    for (let i = 0; i < labels.length; i++) {
        labels[i].style.color = "#ffffff";
    }

    for (let i = 0; i < paragrafos.length; i++) {
        paragrafos[i].style.color = "#ffffff";
    }

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = "#001f22";
        inputs[i].style.color = "#ffffff";
        inputs[i].style.border = "1px solid #ffffff";
    }

    for (let i = 0; i < links.length; i++) {
        links[i].style.color = "#ffffff";
    }

    if (botaoSubmit) {
        botaoSubmit.style.backgroundColor = "#ffffff";
        botaoSubmit.style.color = "#001f22";
    }

    localStorage.setItem("tema", "escuro");
}

function claro() {
    localStorage.setItem("tema", "claro");
    window.location.reload();
}

let botaoEscuro = document.getElementById("noite");

if (botaoEscuro) {
    botaoEscuro.addEventListener("click", escuro);
}

let botaoClaro = document.getElementById("luz");

if (botaoClaro) {
    botaoClaro.addEventListener("click", claro);
}

if (localStorage.getItem("tema") === "escuro") {
    escuro();
}

const botaoMenu = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", () => {
        menu.classList.toggle("ativo");

        if (menu.classList.contains("ativo")) {
            botaoMenu.textContent = "✖";
        } else {
            botaoMenu.textContent = "☰";
        }
    });
}
