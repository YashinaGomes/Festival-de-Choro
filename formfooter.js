// document.getElementById('contact-form').addEventListener('submit', function(event) {
//       event.preventDefault(); // Impede o envio padrão do formulário

//       const formData = new FormData(this);

//       fetch('https://formspree.io/f/meojjyel', {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Accept': 'application/json'
//         }
//       })
//       .then(response => {
//         if (response.ok) {
//           alert('Mensagem enviada com sucesso!');
//           this.reset(); // Opcional: reseta o formulário
//         } else {
//           alert('Ocorreu um erro ao enviar a mensagem.');
//         }
//       })
//       .catch(error => {
//         console.error('Erro:', error);
//         alert('Ocorreu um erro ao enviar a mensagem.');
//       });
//     });

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
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
          document.getElementById('successMessage2').style.display = 'block'; // Exibe a mensagem de sucesso
          form.reset(); // Opcional: reseta o formulário
      } else {
          alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
      }
  }).catch(function(error) {
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
  });
});