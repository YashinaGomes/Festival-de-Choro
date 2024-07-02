document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var form = event.target;
    var data = new FormData(form);

    // Envia os dados do formulário usando Fetch API
    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            document.getElementById('successMessage').style.display = 'block'; // Exibe a mensagem de sucesso
            form.reset(); // Opcional: reseta o formulário
        } else {
            alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        }
    }).catch(function(error) {
        alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    });
});

