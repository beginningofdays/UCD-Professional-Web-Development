function drawConsolePyramid(height) {
    // Loop for each row
    for (let i = 0; i < height; i++) {
        let row = '';
        // Calculate number of spaces needed for centering
        const spaces = ' '.repeat(height - i - 1);
        // Calculate number of stars for this row
        const stars = '*'.repeat(2 * i + 1);
        // Combine spaces and stars and print
        row = spaces + stars;
        console.log(row);
    }
}

// Test the function
drawConsolePyramid(5);

