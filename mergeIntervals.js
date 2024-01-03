// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the nin-overlapping inervals that cover all the intervals in the input.

/*
 * Complete the 'merge_intervals' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY intervals as parameter.
 */


// * Complete the 'merge_intervals' function below.
// *
// * The function is expected to return a 2D_INTEGER_ARRAY.
// * The function accepts 2D_INTEGER_ARRAY intervals as parameter.
// */


function merge_intervals(intervals) {
    
  if (intervals.length === 0) return [];

  // Sort the intervals based on the starting values.
  intervals.sort((a, b) => a[0] - b[0]);

  let merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
      let lastMerged = merged[merged.length - 1];
      let current = intervals[i];

      // Check for overlap
      if (lastMerged[1] >= current[0]) {
          // Merge overlapping intervals
          lastMerged[1] = Math.max(lastMerged[1], current[1]);
      } else {
          // If no overlap, just add to the result
          merged.push(current);
      }
  }

  return merged;


}

// first attempt
// function merge_intervals(intervals) {
    
//     intervals.sort((a,b)=> a[0] - b[0])
    
//     for(let i = 0; i < intervals.length - 1; i++){
        
//         let interval1Num1 = intervals[i][0]
//         let interval1Num2 = intervals[i][1]
        
//         let interval2Num1 = intervals[i+1][0]
//         let interval2Num2 = intervals[i+1][1]
        
//         let indexesToRemove = []
        
//         // checker
//         let isNum1Between = interval1Num1 >= interval2Num1 && interval1Num1 <= interval2Num2
//         let isNum2Between = interval1Num2 >= interval2Num1 && interval1Num2 <= interval2Num2
        
//         //if checker then handle merge
//         if(isNum1Between || isNum2Between){
            

//             if(interval1Num1 < interval2Num1){
//                 intervals[i+1][0] = interval1Num1
//             }
//             if(interval1Num2 > interval2Num2){
//                 intervals[i+1][1] = interval1Num2
//             }
//             //remove first index
//             // we could remove indexs after and jsut keep track of indexes now
//             // indexesToRemove.push(i)
            
//             intervals.shift()
            
//         }
            
        
        
        
//     }
    
//     return intervals

// }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const intervalsRows = parseInt(readLine().trim(), 10);

    const intervalsColumns = parseInt(readLine().trim(), 10);

    let intervals = Array(intervalsRows);

    for (let i = 0; i < intervalsRows; i++) {
        intervals[i] = readLine().replace(/\s+$/g, '').split(' ').map(intervalsTemp => parseInt(intervalsTemp, 10));
    }

    const result = merge_intervals(intervals);

    ws.write(result.map(x => x.join(' ')).join('\n') + '\n');

    ws.end();
}
