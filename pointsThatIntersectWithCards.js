'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});



// You are given a 0-indexed 2D integer array nums representing the coordinates of the cards parking on a number line. FOr any index i, nums[i] = [starti, endi] where starti is the starting point of the ith car and endi is the ending point of the ith car. 
// Return the number of integer points on the line that are covered with any part of a car






function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'number_of_points' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY nums as parameter.
 */

function number_of_points(nums) {
    
    let coveredPoints = []
    
    for(let i = 0; i < nums.length; i++){
            
    let num1 = nums[i][0]            
    let num2 = nums[i][1]     
    
    for(let j = num1; j <= num2; j++){
        coveredPoints.push(j)
    }       
        
        
    }
    console.log(coveredPoints)
    // coveredPoints.sort((a,b)=>b-a)
    let coveredPointsSet = new Set(coveredPoints)
    console.log(coveredPointsSet)
    console.log(coveredPointsSet.size)
    
    
    return coveredPointsSet.size

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const numsRows = parseInt(readLine().trim(), 10);

    const numsColumns = parseInt(readLine().trim(), 10);

    let nums = Array(numsRows);

    for (let i = 0; i < numsRows; i++) {
        nums[i] = readLine().replace(/\s+$/g, '').split(' ').map(numsTemp => parseInt(numsTemp, 10));
    }

    const result = number_of_points(nums);

    ws.write(result + '\n');

    ws.end();
}
