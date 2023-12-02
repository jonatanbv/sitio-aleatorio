let btn1 = document.getElementById("btn1");
let btn4 = document.getElementById("cuatro")


btn4.onclick = function(){
    imgchange.src = 'images/i4.jpg';
}

function gerarNumeroNaoRepetido() {
    // Array com os números de 1 a 3
    const numeros = [1, 2, 3];
  
    // Embaralha o array usando o algoritmo Fisher-Yates (ou Knuth shuffle)
    for (let i = numeros.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }
  
    // Remove e retorna o último número do array embaralhado
    return numeros.pop();
  }



btn1.onclick = function(){
    let uno = 'images/i1.jpg';
    let dos = 'images/i2.jpg';
    let tres = 'images/i3.jpg';
    let cuatro = 'images/i4.jpg';

    const numero = gerarNumeroNaoRepetido();

    imgchange.src = 'images/i'+numero.toString()+'.jpg';
}


  
