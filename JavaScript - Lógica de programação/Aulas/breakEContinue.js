 const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
 let i = 0;
 do {
     let numero = numeros[i];
     
     if (numero === 2) {
         i++;
         continue;
        }
        
    console.log(numero);
    
    if (numero === 7) {
        i++;
        break;
    }
    
    i++;
}
while (i <  numeros.length);

//  Continue continua para próxima iteração
//  Break sai do laço