function calcularVolume() {
    // Solicita as dimensões ao usuário, convertendo os valores para números
    let altura = parseFloat(prompt("Digite a altura da área: "));
    let largura = parseFloat(prompt("Digite a largura da área: "));
    let comprimento = parseFloat(prompt("Digite o comprimento da área: "));

    // Verifica se os valores são números válidos
    if (isNaN(altura) || isNaN(largura) || isNaN(comprimento)) {
        console.error("Por favor, insira apenas números para as dimensões.");
        return;
    }

    // Calcula o volume
    let volume = altura * largura * comprimento;

    // Exibe o resultado
    console.log("O volume da área é:", volume);
}

// Chama a função para calcular o volume
calcularVolume();


const calcularVolume = require('./sua_funcao'); // Supondo que a função esteja em um arquivo separado

test('Calcula o volume corretamente para valores positivos', () => {
  const resultado = calcularVolume(3, 4, 5);
  expect(resultado).toBe(60);
});

test('Retorna zero quando uma das dimensões é zero', () => {
  const resultado = calcularVolume(3, 0, 5);
  expect(resultado).toBe(0);
});

test('Lança um erro para entradas negativas', () => {
  expect(() => calcularVolume(-2, 4, 5)).toThrow();
});

test('Lança um erro para entradas não numéricas', () => {
  expect(() => calcularVolume('a', 4, 5)).toThrow();
});