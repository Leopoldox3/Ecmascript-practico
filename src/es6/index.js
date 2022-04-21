function newFuction (name, age, country){
    var name = name || 'oscar';
    var age = age || 28;
    var country = country || 'Peru';
    console.log(name,age,country);
}

//es6
function newFuction2(name='oscar',age =32,country="Peru"){
    console.log (name,age,country);
};

newFuction2();
newFuction2('Leonardo','26','PE');

let hello = "Hello";
let world = "World";
let epicPharse = hello + ' ' + world
console.log(epicPharse);
//es6
let epicPharse2= `${hello} ${world}`;
console.log (epicPharse2);

let lorem = "estoy probando dlsklsdkl dkslkddlkdslksdlksd sd \n" + "otra frase epica que necesitamos."
//es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;
console.log(lorem)
console.log(lorem2)

let person = {
    'name': 'Leonardo',
    'age': '28',
    'country': 'Peru'
}
console.log (person.name,person.age,person.country);
//es6
let{country}=person;
console.log(name,age,country);
//es6
let team1 =['Leonardo','Joel','Palacios'];
let team2 =['Miriam','Lisset','Manrique'];

let education = ['David', ...team1, ...team2];
console.log (education);
//es6
{
    var globalVar = 'Globar var';//global
}
{
    let globalLet = 'Global let';//disponible en el mismo bloque de codigo local scope
}

console.log(globalVar);
console.log(globalLet);

//es6
const a='b';
a ='a';
console.log(a);


let name ='Leonardo';
let age = 32;
//es5
obj ={name:name,age:age};
//es6
obj2 ={name,age};
console.log (obj2)

const names = [
    {name: 'Leonardo', age:28},
    {name: 'Miriam', age:35}
]
//es5
let listOfNames = names.map(function(item){
    console.log(item.name);
})
//es6
let listOfNames2 = names.map(item=>console.log(item.name));

const listOfName3 = (name,age,country)=>{
    
}

const listOfName4 = name=> {

}
const square =num => num*num;

//////////////////////////////////


const helloPromise =()=>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        }else{
            reject('ups!!');
        }
    });
}
helloPromise()
.then(response=>console.log(response))//then cuando la promesa se resuelve
.then(()=>console.log('hola'))
.catch(error => console.log(error));//catch cuando la promesa se rechaza

class calculator{
    constructor(){
        this.valueA=0;
        this.valueB=0;
    }
    sum(valueA,valueB){
        this.valueA=valueA;
        this.valueB=valueB;
        return valueA+valueB;
    }
}
const calc= new calculator();
console.log(calc.sum(2,2));

import{hello}from './module';

hello();

function* helloWorld(){
    if(true){
        yield 'Hello, ';

    }
    if(true){
        yield'World';
    }
};

const generatorHello = helloWorld();
console.log (generatorHello.next().value);
console.log (generatorHello.next().value);
console.log (generatorHello.next().value);




