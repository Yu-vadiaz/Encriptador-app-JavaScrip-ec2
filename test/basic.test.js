const { encriptarCesar, desencriptarCesar } = require('../app.js');

describe('Cifrado César básico', () => {
  test('1) 1 + 1 = 2 (smoke test)', () => {
    expect(1 + 1).toBe(2);
  });

  test('2) Encripta solo A-Z y conserva espacios/símbolos', () => {
    expect(encriptarCesar('HOLA MUNDO!', 3)).toBe('KROD PXQGR!');
    expect(encriptarCesar('abc xyz 123', 2)).toBe('ABC ZAB 123');
  });

  test('3) Desencripta correctamente', () => {
    const enc = encriptarCesar('CHAT GPT', 5);
    expect(desencriptarCesar(enc, 5)).toBe('CHAT GPT');
  });

  test('4) Desplazamientos negativos y >26', () => {
    expect(encriptarCesar('A', -1)).toBe('Z');
    expect(encriptarCesar('A', 27)).toBe('B');
  });
});
