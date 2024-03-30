//Declare variables
let numberOfStars =0; 
let outputStars = '';

//inputs
numberOfStars = prompt('Enter the number of stars?');

//loop
for(let i=0; i < numberOfStars; i++){
    outputStars += '*';
}
      //not a number 
while(isNaN(numberOfStars)||numberOfStars <= 0){
    alert('Please enter a number greater than 0');
    numberOfStars = prompt('Enter the number of stars?');
}   //will allow the for loop to be reused. 

//output
alert("Outputting" + numberOfStars + " stars: " + outputStars); 
