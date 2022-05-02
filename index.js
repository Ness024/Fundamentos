/*Realizar la siguiente práctica:
Crear una variable tipo arreglo y mostrarla en pantalla de la siguiente forma:

Matriz original         Salida 1            Salida 2            Salida 3:
  1 2 3                  9 8 7               1 4 7               9 6 3
  4 5 6                  6 5 4               2 5 8               8 5 2
  7 8 9                  3 2 1               3 6 9               7 4 1

Solo debe escribirse ciclos for como se vio en clase, además debes buscar la forma 
para darle formato, es decir, se vea en consola tal cual se muestra aquí, es decir,
para una matriz de 3x3, deben mostrarse 3 elementos por renglón.*/

let message = "";
const array = [  // [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]]
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; 

for (let i = 0; i < 3; i++) {
  console.log(array[i]);
}

message += "Matriz Original";
for (let i = 0; i < 3; i++) {
  message += "\n";
  for (let j = 0; j < 3; j++) {
    message += array[i][j] + " ";
  }
}

message += "\nSalida 1";
for (let i = 2; i >= 0; i--) {
  message += "\n";
  for (let j = 2; j >= 0; j--) {
    message += array[i][j] + " ";
  }
}

message += "\nSalida 2";
for (let i = 0; i < 3; i++) {
  message += "\n";
  for (let j = 0; j < 3; j++) {
    message += array[j][i] + " ";
  }
}

message += "\nSalida 3";
for (let i = 2; i >= 0; i--) {
  message += "\n";
  for (let j = 2; j >= 0; j--) {
    message += array[j][i] + " ";
  }
}

console.log(message);
