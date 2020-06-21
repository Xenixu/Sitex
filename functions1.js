function makeCounter () {
    let a = 0;
    return function Counter() {
    console.log(a++);
  };
  console.log(0);
};
  
  const counter1 = makeCounter();
  const counter2 = makeCounter();
  
  
  
  
  counter1();
  counter1();
  counter2();
  counter2();
  counter1();

  
  function sum(a) {
    return function(b) {
     return a + b;
   };
 };
 
 alert( sum(1)(2) );
 alert( sum(5)(-1) ); 


 function sumInput() {
  let numbers= [];

 do  {
  let value = prompt(`number?`,0);
 numbers.push(+value);
 }
 while(value === `` || value === null || isFinish(value)) break;
}
 alert(sumInput())
 console.log(sumInput())