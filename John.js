let admin="John"
let name="John"
alert(admin);
console.log (admin )

let name="Ilia";
alert(`hello ${1}`);//?
alert(`hello ${"name"}`);//?
alert(`hello ${name}`);//?


let dogs = prompt("how many dogs do you have?");

if (dogs> 0) {
    alert(1);
    console.log(1);
}  else if (dogs<0) {
    alert(-1);
    console.log(-1);
}  else (dogs=0); 
    alert(0);
    console.log(0);



const age = prompt (`how old are you?`);

if (age >= 14 && age <=90){
    console.log("great");
} else {
    console.log("sorry");
}



for (let y = 2; y <= 10; y = y + 2) {
    console.log(y);
}

function min(a,b) {
    if (a < b) return a;
    else return b;
    }
    
    console.log(min(7, 3));
    console.log(min(28, 76));
    
    function pow(x, n) {
      let result = x;
    
      for (let i = 1; i < n; i++) {
        result *= x;
      }
    
      return result;
    }
    console.log(pow(5, 3));
    


