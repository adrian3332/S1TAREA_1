/* Sintaxis del lenguaje 
Varibales y tipos de datos */
console.log("En ejecución...")
var numero = 10
let number1; //indefinido
let number2 = null //nulo
let entero = 18
let decimal = 1.4
let string = "Arriba Ecuador!"
let booleano = true
let date = new Date()
let dd = date.getDate(),
    mm = date.getMonth(),
    aa = date.getYear(),
    hoy = `${aa}-${mm}-${dd}`
const pi = 3.1416
/* console.log("Numero 1=", number1)
console.log(`Numero2=${number2}`)
console.log(`fecha hoy=${date}`)
console.log(hoy) */

// Arreglos, Json y Objetos
let nums = [1, 2, 3];
let colors = ["rojo", "amarillo", "verde"]

const json = {
    "nombres": ["Andrea", "Lupita"],
    "genero": "Femenino"
}

const estudiante = {
    nombre: 'Fabricio',
    genero: 'Masculino',
    deportes: ['Futbol', 'Ajedrez'],
    conocimientos: {
        lenguajes: ['Python', 'HTML', 'Js']
    }
};
estudiante.nombre = "Fabricio"
estudiante.edad = 21
/* console.log('Json' ,json, json.genero);
console.log('Objeto' ,estudiante, estudiante.conocimientos); */

// Estructuras de Control
// if
let num1= 8
let num2= 8
if (number1 === undefined)
    //console.log(`${number1}= indefinido`);
if (number2 === null)
    //console.log(`${number2}= nulo`);
if (num1 == 0){
    //console.log(n1);
}else if (num1 === num2){
    //console.log(`${num1}=${num2}`);
}else{
    //console.log(`${num1}!=${num2}`);
}

// Switch
let numb = 4
let rec = numb % 2
switch (rec){
    case 0:
        //console.log(`${rec} -${numb} es Par`);
    break
    case 1:
        console.log(`${numb} es Impar`);
    default:
        if (isNaN(rec)) console.log(`${rec}= Error`);
    break
}
//console.log("Estás fuera del switch");

// Bucle incremento++
// While, usado en incrementos o decrementos automaticos
let j = 0
//console.log("BUCLE WHILE");
while (j < colors.length && colors[j] != "arco iris"){
    //console.log(j, colors[j]);
    j = j+1
}
// For incrementos decrementos automaticos
//console.log("Bucle For", colors);
for (let i = 0; i< colors.length; i++){
    //console.log(i, colors[i]);
}
// For in 
//console.log("Bucle For in", colors);
for (let h in colors){
    //console.log(h, colors[h]);
}
// For off
//console.log("Bucle For off", colors);
for (let color of colors){
    //console.log(color);
}
let nam = "Damian"
for (let caracter of nam){
    //console.log(caracter);
}
const Pearsons = [
{"nombre": "Antonio", "apellido": "Valencia"},
{"nombre": "Cristian", "apellido": "Noboa"},
{"nombre": "Valezka", "apellido": "Freire"}
]
//console.log("of");
for (let pearson of Pearsons){
    //console.log(pearson ,pearson.nombre);
}

//recorrido de objetos iteables
/* console.log("For Each");
Pearsons.forEach(pearson => {
    if (pearson.nombre != "Antonio")
    console.log(pearson.nombre)
}) */
//Map
const pears = Pearsons.map(perso => perso)
//console.log("Map", pears);

//Filter
const perso = Pearsons.filter(perso => perso.nombre != "Antonio")
//console.log("Filter", perso);

//Find
const unaPersona = Pearsons.find(perso => perso.nombre === "Antonio")
//console.log("Find", unaPersona);

// Funciones
// Suma
function sumar(){
    console.log(5+2);
}
sumar()
let suma = () => {
    console.log("Suma con Arrow Function", 10+8);
}
suma()
// Multiplicación
function multiplicar(n1, n2){
    return n1*n2
}
let respuesta = multiplicar(5, 5)
console.log("Sin Arrow", respuesta);
const mult = (n1, n2) => n1*n2
console.log(mult(5,5)); 
// División
function dividir(n1, n2=4){
    let respt = 0
    try{
        respt = n1/n2
    }catch (e){
        console.log("Acaba de ocurrir un error!", e.message);
    }
    return respt
}
respt = dividir(8)
//console.log("Sin arrow" ,respt);
respt = dividir(8, 0)
//console.log(respt);

const div = (n1, n2=4) =>{
    let resp =0
    try{
        resp = n1/n2
    }catch (e) {
        console.log("Error!", e.message);
    }
    return resp
}
//console.log("Con arrow", div(8));

/* fetch. Sirve para consumir api(respuesta del servidor
que entrega una respuesta con datos para ser consumidos) */
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(datos => {
        // console.log(datos.results)
        // datos.results.forEach(poke => 
        //     console.log(poke.name, poke.url))
    })
    .catch(error => console.log("Hubo un error en el api!", error))

// async await: devuelve un objeto asincronico
const obtenerDatos = async () =>{
    try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const datos = await res.json()
        //console.log("Async Await");
        //datos.results.forEach(poke => console.log(poke.name, poke.url)) 
    }catch (error){
        console.log("Error del api con async: ", error);
    }
}
obtenerDatos()

//DOM
let contenido = document.getElementById ('contenedor')
let variable = document.getElementById ('Variables')
console.log(contenido);
console.log(Variables);
Variables.innerHTML = 'Enteros, Decimales, String, Boleanos, Fechas';
Variables.style.color = "blue"
Variables.style.background = "#A5D6D0"
console.log(Variables);
/* let concepto = document.querySelector('.concepto')
console.log(concepto);
concepto.innerHTML = 'Area de memoria' */
let conceptos = document.querySelectorAll('.concepto')
let cont = 1
conceptos.forEach(parrafo => {
    parrafo.innerHTML = `Area de memoria#${cont}`
    console.log(parrafo);
    cont = cont+1
})
console.log(conceptos);
// Eventos
let boton = document.getElementById ('boton 2')
let valor = document.getElementById ('valor')
boton.addEventListener('mouseover', () => {
    console.log("Acabas de pasar el mouse!");
})
boton.addEventListener('click', () => {
    let nodo = document.createElement ("p")
    nodo.innerHTML = "nuevo elemento"
    nodo.style.color = "red"
    contenido.appendChild(nodo)
})
valor.addEventListener('keypress', (e) =>{
    console.log(e.target.value);
})