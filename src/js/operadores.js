// comparação

3 == "3"; // true
3 === "3"; // false, os tipos são diferentes
4 != 2; // true
4 !== "4"; // true, os tipos são diferentes
5 > 4; // true
10 < 5; // false
10 <= 5; // false

// aritméticos

console.log(1 / 2); /* imprime 0.5 */
console.log(1 / 2 == 1.0 / 2.0); /* isto também é verdadeiro */

// lógicos

var a1 =  true && true;     // t && t retorna true
var a2 = "Gato" && "Cão";   // t && t retorna Cão
var a3 =  true || false;    // t || f retorna true
var a4 = "Gato" || "Cão";   // t || t retorna Gato
var a5 = !true;   // !t retorna false
var a6 = !false;  // !f retorna true
var a7 = !"Gato"; // !t retorna false
