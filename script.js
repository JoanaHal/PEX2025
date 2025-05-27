

// Inicializa o EmailJS com o seu User ID
emailjs.init('seu_user_id'); // Substitua 'seu_user_id' pelo seu User ID do EmailJS



// Adiciona um ouvinte de evento ao formulário para capturar o envio

document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário (sem recarregar a página)


    // Coleta os dados do formulário com FormData

    const formData = new FormData(this);



    // Envia os dados para o EmailJS

    emailjs.sendForm('seu_service_id', 'template_xxxxxxxx', formData)  // Substitua 'template_xxxxxxxx' pelo Template ID do seu template
        .then(() => {
            // Exibe mensagem de sucesso e limpa o formulário

            alert('Mensagem enviada com sucesso!');
            this.reset();
        })
        .catch(() => {
            // Exibe mensagem de erro caso o envio falhe
            
            alert('Erro ao enviar mensagem. Tente novamente.');
        });
});


