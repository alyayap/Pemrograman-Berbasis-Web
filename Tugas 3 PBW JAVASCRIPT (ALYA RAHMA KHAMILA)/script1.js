function generateFibonacci() {
    let n = parseInt(document.getElementById('fiboInput').value);
    console.log("Input Fibonacci:", n); 

    if (isNaN(n) || n <= 0) {
        document.getElementById('fiboResult').innerText = "Masukkan angka lebih besar dari 0";
        console.log("Input tidak valid untuk Fibonacci");
        return;
    }

    let fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }

    let resultText = "Deret Fibonacci: " + fibSeries.slice(0, n).join(', ');
    document.getElementById('fiboResult').innerText = resultText;
    console.log("Hasil Fibonacci:", resultText);
}

function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;

    console.log("Angka pertama:", num1, "| Angka kedua:", num2, "| Operator:", operator);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('calcResult').innerText = "Masukkan angka yang valid!";
        console.log("Input angka tidak valid!");
        return;
    }

    if ((operator === '/' || operator === '%') && num2 === 0) {
        document.getElementById('calcResult').innerText = "Tidak bisa membagi dengan nol!";
        console.log("Error: Pembagian dengan nol!");
        return;
    }

    const calculator = (operator, ...numbers) => {
        switch (operator) {
            case '+': return numbers.reduce((acc, num) => acc + num, 0);
            case '-': return numbers.reduce((acc, num) => acc - num);
            case '*': return numbers.reduce((acc, num) => acc * num, 1);
            case '/': return numbers.reduce((acc, num) => acc / num);
            case '%': return numbers.reduce((acc, num) => acc % num);
            default: return 'Operator tidak valid!';
        }
    };

    let result = calculator(operator, num1, num2);
    document.getElementById('calcResult').innerText = "Hasil: " + result;
    console.log("Hasil perhitungan:", result);
}