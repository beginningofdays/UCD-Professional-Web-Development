function factorial(){
    //declare variables
    let number =0;
    let factorial = 1;
    let output = "";
}

factorial();

//inputs
number = parseInt(prompt("Enter a number between 1 and 20"));
//  WHILE not a number OR number less then 1 OR number greater 20
while(isNaN(number) || number < 1 || number > 20){
    number = parseInt(prompt("Please Enter a number between 1 and 20"));
}//Do not proceed until this loop is broken

//WHILE Loop is true, input Number into Output
output = "factorial up to" + number + ": "; 
//calculate factorials    //number equals j - Sets Runtime 
for(let j=number; j>=1; j--){ // outer loop  
   
    //Arrow Function
    const fac =(number) =>{
        let fac =1;
        for(let i =1; i<=number; i++ ){
            fac *=i;
        }
        return fac;
    }   
    /*factorial = 1;  //Run factorial loop so long as "i" is less then runtime value
    for(let i=1; i<=j; i++){ //inner loop  
        factorial *=i; // 1 * = current value 
    }
    output += j + '!=' +factorial + ',';  */
    output += j + '!=' +fac(j)+ ',';
}

//output factorials
alert(output);