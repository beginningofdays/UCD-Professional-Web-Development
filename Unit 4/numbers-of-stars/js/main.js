const height = 5;

// Loop to generate each row of the pyramid
for (let i = 0; i < height; i++) {                 
  let row = '';
                                                 j < 5 - 0 - 1 = 4 
   //Generate spaces before the asterisks        j < 5 - 1 - 1 = 3 
   for (let j = 0; j < height - i - 1; j++) {    j < 5 - 2 - 1 = 2
   row += ' ';                                   j < 5 - 3 - 1 = 1 
  }                                              j < 5 - 4 - 1 = 0 

  // Generate asterisks for the pyramid
  for (let k = 0; k < 2 * i + 1; k++) {      k < 2 * 0 + 1  = 1   [4 space]     *    Loop runs 1 time 
    row += '*';                              k < 2 * 1 + 1  = 3   [3   etc ]   ***   Loop runs 2 times 
  }                                          k < 2 * 2 + 1  = 5   [2   etc ]   *****  Loop runs 5 times 
                                             k < 2 * 3 + 1  = 7   [1   etc ]  ******* Loop runs 7 times 
                                             k < 2 * 4 + 1  = 9   [0  etc  ] ********* Loop runs 9 times 
  // Print each row
  console.log(row);
}

                        
