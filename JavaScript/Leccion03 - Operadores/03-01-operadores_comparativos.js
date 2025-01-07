let a = 3;
let b = 2;
let c = "3";

let z = a == b; // Compara si ambos valores son iguales sin importar el tipo (boolean).

z = a === c; // Compara si los valores y si el tipo de dato es el mismo.

z = a != c; 

z = a !== c; 

// A los que tienen un símbolo extra, son estrictos (comparan el tipo).

z = a < b;
z = a > b;
z = a <= b;
z = a >= b;