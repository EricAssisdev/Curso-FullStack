//Retornar se o numero é divisivel por X numero retornando true ou false
function solution(number1, number2) {
    const rest = number1 % number2;
    const result = rest === 0;

    console.log(result);
}

solution(3124123, 3124123);
solution(70, 10);
