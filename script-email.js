document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form_contatti');
    if (!form) {
        console.error('❌ Form non trovato!');
        return;
    }
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Invio in corso...';
        submitBtn.disabled = true;

        const templateParams = {
            name: form.elements.name.value,
            lastname: form.elements.firstname.value,
            phonenumber: form.elements.phonenumber.value,
            email: form.elements.email.value,
            message: form.elements.message.value,
        };

        emailjs.send("service_yzloq0b", "template_umhgleo", templateParams)
            .then(function() {
                alert("Email Inviata Correttamente!");
                form.reset();
            })
            .catch(function(error) {
                alert("Errore nell'invio: " + error.text);
            })
            .finally(function() {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
});
