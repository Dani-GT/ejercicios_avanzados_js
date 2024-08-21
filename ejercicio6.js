// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
// Retorna el array resultante.


const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

  function swap(fantasticFour, index1, index2) {

    const temp = fantasticFour[index1];
    fantasticFour[index1] = fantasticFour[index2];
    fantasticFour[index2] = temp;
    
    return fantasticFour;
  }
  
  console.log(swap(fantasticFour, 1, 3)); 
  