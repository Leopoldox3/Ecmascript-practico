let array = [1,2,3, [1,2,3,[1,2,3]]];

console.log(array.flat(2))

let array2 =[1,2,3,4,5];
console.log(array.flatMap(value=>[value,value*2]));

//////////////////////////////////

let hello ='         hello world';
console.log(hello.trimStart())

let hello2 ='hello world     ';
console.log(hello2.trimEnd());

//////////////////////////////////

let entries =[['name','Leonardo'],['age',28]];//transforma de arreglo a objetos
console.log(Object.fromEntries(entries))

//////////////////////////////////

let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);