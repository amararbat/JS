const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros); 
// console.log(marvel_heros[3][0]);//how toacees array into array

// const allHeros=marvel_heros.concat(dc_heros)  //correct way
// console.log(allHeros);

// const allHeros=[...dc_heros,...marvel_heros]
// console.log(allHeros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("AMARARBAT"))  //checks if the string "AMARARBAT" is an array
console.log(Array.from("AmarArbat"))   //converts the string into array
console.log(Array.from({name: "amar"})) // interesting[line tries to convert an object {name: "amar"} into an array.but fails]
