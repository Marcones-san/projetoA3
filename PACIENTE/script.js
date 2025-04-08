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
        window.location.href = "index.html";
    });
});