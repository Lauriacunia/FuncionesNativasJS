/*
const contarCaracteres = (nombre, apellido) => {

    console.log(`Tu nombre tiene ${nombre.length} y tu apellido tiene ${apellido.length} letras respectivamente` )
    

}



contarCaracteres("Laura", "Acuña") */


/* burlarse (str)

Crear una función burlarse que tome como argumento un string str y 
devuelva el mismo string con todas las vocales reemplazadas por la letra i

burlarse('programar es dificil') // 'prigimir is dificil' */

/*
const burlarse = (str) => {

    str = str.replace(/a/gi, "i")
    str = str.replace(/e/gi, "i")
    str = str.replace(/o/gi, "i")
    str = str.replace(/u/gi, "i")

    return str

}
const burlarse2 = (str) => {

    str = str.replace(/[aeiou]/gi, "i") 
    return str
}


console.log(burlarse("Programar es dificil"))

console.log(burlarse2("Lo hice en una sola linea,¡iupi!")) */


/*
tienenMismaLongitud(a, b)
Crear una función tienenMismaLongitud que tome como argumentos dos strings a y b y
 devuelva true si tienen la misma longitud o false de lo contrario

igualLongitud('javascript', 'java') // false
igualLongitud('manzana', 'cerveza') // true */

/*
const tienenMismaLongitud = (a, b) => {
    if(a.length == b.length ){
        return true
    }else {
        return false
    }
}

console.log(tienenMismaLongitud('javascript', 'java'))// false
console.log(tienenMismaLongitud('manzana', 'cerveza')) // true */

/*
esUltimoCaracter(palabra, caracter)
Crear una función igualLongitud que tome como argumentos una palabra y un caracter y devuelva true si la palabra termina con el caracter o false de lo contrario

igualLongitud('lovelace', 'e') // true
igualLongitud('lovelace', 'f') // false */

/*
const esUltimoCaracter = (palabra, caracter) => {  // NO ENTIENDO PORQUE SI PONIA LOS PARAMETROS CON COMILLAS NO FUNCIONABA
    if(palabra.charAt((palabra.length)-1) == caracter){
        return true
    }else {
        return false
    }
}

console.log(esUltimoCaracter('lovelace', 'e')) 
console.log(esUltimoCaracter('lovelace', 'f')) */



/*esContraseniaValida(contrasenia)
Crear una función esValida que tome como argumento una contrasenia (string)
 y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres

esValida('contraseniaMuySegura') // true
esValida('abc123') // false */

/*
const esValida = (str) =>{

    if(str.length >= 8) {
        return true
    }
    else{
        return false
    }
}

console.log(esValida('contraseniaMuySegura')) // true
console.log(esValida('abc123'))// false */

/*sonIguales(a, b)
Crear una función sonIguales que tome como argumentos dos strings a y b 
y devuelva true si ambos strings tienen el mismo contenido independientes 
del caso y false en caso contrario.

sonIguales('javascript', 'JavaScript') // true
sonIguales('AdA LoVeLaCe', 'Ada Lovelace') // true
sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO') // false */
/*
const sonIguales = (a, b) =>{
    a = a.toUpperCase;
    b = b.toUpperCase;

    if( a == b){
        return true
    }
    else{
        return false
    }
}

console.log(sonIguales('javascript', 'JavaScript')) // true
console.log(sonIguales('AdA LoVeLaCe', 'Ada Lovelace')) // true
console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO')) // false  //NO SE PORQUE ME DA TRUE JAJAJA */

/*contarPalabras(str)
Crear una función contarPalabras que tome como argumento un string str y devuelva la cantidad de palabras que posee

contarPalabras('javascript') // 1
contarPalabras('ada lovelace') // 2
contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos') // 14 */


/*
const contarPalabras = (str) =>{
    str = str.trim();
    str = Array.from(str); // no se si JS considera a un String como un Array de caracteres
    // como podria recorrer un string con un for?

    let cantidadDePalabras 
    let contadorDeEspacios

    for(let espacio of str ){
        if(espacio == " "){
            contadorDeEspacios ++
        }

    }
    cantidadDePalabras = contadorDeEspacios + 1

    return cantidadDePalabras
}

console.log(contarPalabras('javascript'))// 1
console.log(contarPalabras('ada lovelace')) // 2
console.log(contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos')) // 14 */

/*esFraccionMayorAUno(fraccion)
Crear una función esFraccionMayorAUno que tome como argumento un string fraccion (en el formato 'numerador/denominador')
 y devuelva true si dicha fracción es mayor a 1 o false de lo contrario

esFraccionMayorAUno('1/2') // false
esFraccionMayorAUno('2/2') // false
esFraccionMayorAUno('4/2') // true */
/*
const esFraccionMayorAUno = (str) =>{
    let numerador = str.charAt(0)
    let denominador = str.charAt(2)

    if((numerador / denominador) > 1){
        return true
    }else {
        return false
    }

}
console.log(esFraccionMayorAUno('1/2'))// false
console.log(esFraccionMayorAUno('2/2')) // false
console.log(esFraccionMayorAUno('4/2')) // true */


/*
capitalizar(str)
Crear una función capitalizar que tome como argumento un string str y devuelva el mismo string con la primera letra en mayúscula

capitalizar('lovelace') // 'Lovelace'
capitalizar('había una vez...') // 'Había una vez...' */

/*
const capitalizar = (str) => {
    str = str.trim();
    str = str.replace(str.charAt(0), str.charAt(0).toUppercase); // se podria algo asi? es algo se sintaxis que me falta?
    return str
}

console.log(capitalizar('lovelace'))// 'Lovelace'
console.log(capitalizar('había una vez...')) // 'Había una vez...' */


/*aHackerSpeak(str)
Crear una función aHackerSpeak que tome como argumento un string str 
y el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:

- Las i se transforman en 1
- Las e se transforman en 3
- Las a se transforman en 4
- Las s se transforman en 5
- Las 0 se transforman en 0
aHackerSpeak('javascript') // 'j4v45cr1pt'
aHackerSpeak('soy una hacker') // '50y un4 h4ck3r'
aHackerSpeak('ADA LOVELACE') // '4D4 L0V3L4C3' */

const aHackerSpeak = (str) =>{
    str = str.replace(/i/gi, "1")
    str = str.replace(/e/gi, "3")
    str = str.replace(/a/gi, "4")
    str = str.replace(/s/gi, "5")
    str = str.replace(/o/gi, "0")

    return str
}

console.log(aHackerSpeak('javascript'))// 'j4v45cr1pt'
console.log(aHackerSpeak('soy una hacker')) // '50y un4 h4ck3r'
console.log(aHackerSpeak('ADA LOVELACE')) //