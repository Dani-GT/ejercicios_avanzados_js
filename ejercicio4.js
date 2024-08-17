
//4.1

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(mainCharacters, text) {

    for (let i = 0; i < mainCharacters.length; i++) {
        if (mainCharacters[i] === text) {
            return i;
        }
    }
    return -1;
}
let posicion = findArrayIndex(mainCharacters, "Anakin");
console.log(posicion);





//4.2