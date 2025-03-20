document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    // Aqui você pode validar os campos antes de redirecionar
    window.location.href = "index.html"; // Redireciona para a página de agendamento
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cadastroForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Pegando os valores dos campos
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let cpf = document.getElementById("cpf").value;
        let endereco = document.getElementById("cep").value;
        let telefone = document.getElementById("telefone").value;

        // Simples verificação se os campos foram preenchidos
        if (nome.trim() === "" || email.trim() === "" || cpf.trim() === "" || endereco.trim() === "" || telefone.trim() === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Redireciona após cadastro
        window.location.href = "index.html"; // Redireciona para a página principal
    });
});










/*document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    // Aqui você pode validar os campos antes de redirecionar
    window.location.href = "index.html"; // Redireciona para a página de agendamento
});

document.getElementById("cadastroBtn").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "cadastro.html"; // Redireciona para a página de cadastro
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cadastroForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Pegando os valores dos campos
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        // Simples verificação se os campos foram preenchidos
        if (nome.trim() === "" || email.trim() === "" || username.trim() === "" || password.trim() === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        alert("Cadastro realizado com sucesso!");
        window.location.href = "index.html"; // Redireciona para a página principal
    });
});*/