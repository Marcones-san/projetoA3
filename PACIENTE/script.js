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

document.addEventListener("DOMContentLoaded", function () {
    const cepInput = document.getElementById("cep");
    const telefoneInput = document.getElementById("telefone");

    if (cepInput) {
        cepInput.addEventListener("input", function (e) {
            let value = e.target.value.replace(/\D/g, "").slice(0, 8);
            if (value.length > 5) {
                e.target.value = `${value.slice(0, 5)}-${value.slice(5)}`;
            } else {
                e.target.value = value;
            }
        });
    }

    if (telefoneInput) {
        telefoneInput.addEventListener("input", function (e) {
            let value = e.target.value.replace(/\D/g, "").slice(0, 11);
            if (value.length <= 10) {
                // Telefone fixo
                e.target.value = value.replace(/(\d{0,2})(\d{0,4})(\d{0,4})/,
                    (match, ddd, part1, part2) => {
                        return `${ddd ? `(${ddd}` : ""}${part1 ? `) ${part1}` : ""}${part2 ? `-${part2}` : ""}`;
                    });
            } else {
                // Celular
                e.target.value = value.replace(/(\d{0,2})(\d{0,5})(\d{0,4})/,
                    (match, ddd, part1, part2) => {
                        return `${ddd ? `(${ddd}` : ""}${part1 ? `) ${part1}` : ""}${part2 ? `-${part2}` : ""}`;
                    });
            }
        });
    }

    const form = document.getElementById("cadastroForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const cep = cepInput.value.replace(/\D/g, "");
            const telefone = telefoneInput.value.replace(/\D/g, "");

            if (cep.length !== 8) {
                alert("CEP inválido. Deve conter 8 dígitos.");
                return;
            }

            if (telefone.length !== 10 && telefone.length !== 11) {
                alert("Telefone inválido. Deve conter 10 ou 11 dígitos.");
                return;
            }

            // Aqui você pode prosseguir com o envio
            alert("Cadastro válido! Redirecionando...");
            window.location.href = "index.html";
        });
    }
});
