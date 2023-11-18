// ValidarCorreo.js
alert('Eduardo Ortega Fonseca 21051');

function validarFormulario() {
    console.log('Eduardo Ortega Fonseca 4°C 21051');
    if (!validarCorreo()) {
        return false;
    }
    return true;
}

function validarCorreo(email) {
    var emailInput = document.getElementById('email');
    var email = emailInput.value;
    if (email.indexOf('@') === -1) {
        alert('El correo electrónico debe contener el símbolo "@"');
        return false;
    }

    return true;
}

function obtenerDominio(email) {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
        return email.slice(atIndex + 1);
    } else {
        return null;
    }
}

module.exports = { validarCorreo, obtenerDominio };

