function calcFibonacci(num) {
  let first = 0,
    second = 1,
    temp;

  if (num === 0 || num === 1) {
    return console.log(
      "O número " + num + " pertence à sequência de Fibonacci."
    );
  }

  while (second < num) {
    temp = second;
    second = first + second;
    first = temp;
  }

  if (second === num) {
    console.log("O número " + num + " pertence à sequência de Fibonacci.");
  } else {
    console.log("O número " + num + " não pertence à sequência de Fibonacci.");
  }
}

calcFibonacci(10);
calcFibonacci(34);
