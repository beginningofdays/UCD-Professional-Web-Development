function factorial(){
    //declare variables
    let number =0;
    let factorial = 1;
    let output = '';
}

factorial();

//inputs
number = parseInt(prompt("Enter a number between 1 and 20"));
while(isNaN(number) || number < 1 || number > 20){
    number = parseInt(prompt("Enter a number between 1 and 20"));
}

