document.addEventListener("DOMContentLoaded", function () {

    function validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

        var soma = 0;
        for (var i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        var resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(9))) return false;

        soma = 0;
        for (var i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;

        return resto === parseInt(cpf.charAt(10));
    }

    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            window.location.href = "index.html";
        });
    }

    var cadastroForm = document.getElementById("cadastroForm");
    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function (event) {
            event.preventDefault();

            var nome = document.getElementById("nome").value;
            var email = document.getElementById("email").value;
            var cpf = document.getElementById("cpf").value;
            var endereco = document.getElementById("cep").value;
            var telefone = document.getElementById("telefone").value;

            if (nome.trim() === "" || email.trim() === "" || cpf.trim() === "" || endereco.trim() === "" || telefone.trim() === "") {
                alert("Por favor, preencha todos os campos!");
                return;
            }

            if (!validarCPF(cpf)) {
                alert("CPF inválido! Por favor, verifique.");
                return;
            }

            window.location.href = "index.html";
        });
    }

});