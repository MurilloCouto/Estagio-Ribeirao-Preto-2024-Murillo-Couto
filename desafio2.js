function pertenceFibonacci(num) {
  let anterior = 0;
  let atual = 1;

  while (atual <= num) {
    if (atual === num) {
      return true;
    }

    let proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  return false;
}

const numVerificar = 77;

if (pertenceFibonacci(numVerificar)) {
  console.log(`${numVerificar} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numVerificar} não pertence à sequência de Fibonacci.`);
}
