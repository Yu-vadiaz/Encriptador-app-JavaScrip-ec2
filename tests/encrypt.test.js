// 🔹 Función de encriptado
function encriptar(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

// 🔹 Función de desencriptado
function desencriptar(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

describe("Encriptador App Tests", () => {
  test("debe encriptar correctamente un texto", () => {
    expect(encriptar("hola")).toBe("hoberlai");
    expect(encriptar("gato")).toBe("gaitober");
    expect(encriptar("murciélago")).toContain("ufat"); // contiene la encriptación de "u"
  });

  test("debe desencriptar correctamente un texto", () => {
    expect(desencriptar("hoberlai")).toBe("hola");
    expect(desencriptar("gaitober")).toBe("gato");
    expect(desencriptar("ufatmimesai")).toBe("umia"); 
  });

  test("texto encriptado y desencriptado debe ser igual al original", () => {
    const original = "javascript es divertido";
    const encriptado = encriptar(original);
    const desencriptado = desencriptar(encriptado);

    expect(desencriptado).toBe(original);
  });
});
