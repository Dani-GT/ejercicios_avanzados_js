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
  