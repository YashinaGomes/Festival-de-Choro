document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      const formData = new FormData(this);

      fetch('https://formspree.io/f/meojjyel', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          alert('Mensagem enviada com sucesso!');
          this.reset(); // Opcional: reseta o formulário
        } else {
          alert('Ocorreu um erro ao enviar a mensagem.');
        }
      })
      .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar a mensagem.');
      });
    });