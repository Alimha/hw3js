

// Задание 1

let number = +prompt('Введите кол-во бананов ');

for(let a = 1;  a <= number; a++ ) {
  
   if(a < 2){
      console.log(a + ' banana')
   }else if(a <= number ){
      console.log(a + ' bananas')
   }
}

//Задание 2

let i = +prompt('Введите сколько раз сработает цикл');
let count = 0;


for(let b = 1; b <= i; b++){
if(b %2 == 0){
   count = count + b
   count --
   count --
   }
}
console.log('Сумма четных чисел ' + count);




//Задание 3

let numbe = +prompt('Введите любое число'),
   stepen = +prompt('Введите любую степень');
console.log(numbe**stepen);
