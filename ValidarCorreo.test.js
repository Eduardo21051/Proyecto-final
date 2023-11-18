// ValidarCorreo.test.js
const { validarCorreo, obtenerDominio } = require('../src/ValidarCorreo');

test('debería validar un correo electrónico válido', () => {
    expect(validarCorreo('usuario@example.com')).toBe(true);
});

test('debería invalidar un correo electrónico sin "@"', () => {
    expect(validarCorreo('usuarioexample.com')).toBe(false);
});

test('debería obtener el dominio correctamente', () => {
    expect(obtenerDominio('usuario@example.com')).toBe('example.com');
});

