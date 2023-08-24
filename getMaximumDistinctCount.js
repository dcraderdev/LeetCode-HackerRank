
// Consider two arrays a and b where each consists of n integers. In one operation:
// select two indices I and j(o<=I,j< n)

// swap integers a[I] and b[j]

// this operation can be performed at mist k times

// fond the max num of distinct elements that can be achieved in array a after at mist k operations.

// example:
// n = 5
// a = [2,3,3,2,2]
// b=[1,3,2,4,1]
// k=2




function getMaximumDistinctCount(a, b, k) {
  let hashA = {};
  let hashB = {};
  let swapCandidates = [];

  for (let num of a) {
    hashA[num] = (hashA[num] || 0) + 1;
  }

  for (let num of b) {
    hashB[num] = (hashB[num] || 0) + 1;
    // If the number is not in 'a' and we haven't considered it before
    if (!hashA[num] && swapCandidates.indexOf(num) === -1) {
        swapCandidates.push(num);
    }
  }

  // Sort 'a' to have repeated elements at the beginning
  a.sort((x, y) => (hashA[y] - hashA[x] || x - y));


  console.log(a);
  console.log(hashA);
  console.log(hashB);


  for (let i = 0; i < a.length && k > 0 && swapCandidates.length > 0; i++) {
    // If an element is repeated in 'a', we consider it for swapping
    if (hashA[a[i]] > 1) {
        // Get an element from 'b' that's not in 'a'
        let swapValue = swapCandidates.pop();  
        
        // Update counts
        hashA[a[i]]--;
        hashA[swapValue] = 1;


        a[i] = swapValue;
        
        k--;
    }
  }


  return Object.keys(hashA).length;  // Distinct elements in 'a'
}







// Test
let a = [2,3,3,2,2];
let b = [1,3,2,4,1];
let k = 2;

console.log(getMaximumDistinctCount(a, b, k));  // Expected output: 4





























// _+_+_+_+__+_+_+_+_+_+_+_+_+_+_+_+
// _+_+_+_+__+_+_+_+_+_+_+_+_+_+_+_+
// _+_+_+_+__+_+_+_+_+_+_+_+_+_+_+_+
// _+_+_+_+__+_+_+_+_+_+_+_+_+_+_+_+

// function getMaximumDistinctCount(a, b, k) {
//   // Write your code here
  
  
//   console.log(a)
//   console.log(b)
//   console.log(k)
  
//   let n = a.length
  
//   let hashA = {}
//   let hashB = {}
  
//   for(let i = 0; i < n; i++){
//       if(hashA[a[i]]){
//           hashA[a[i]]++
//       } else{
//           hashA[a[i]] = 1
//       }
      
//       if(hashB[b[i]]){
//           hashB[b[i]]++
//       } else{
//           hashB[b[i]] = 1
//       }  
//   }
  
  
//   console.log(a)
  
  
//   a.sort((x,y) => hashA[y] - hashA[x] || x - y)
  

//   console.log('hashA',hashA)
//   console.log('hashB',hashB )
//   console.log('a',a)
  
  
  
//   let distinctA = new Set(a)
  
  
//   for(let i = 0; i < n && k > 0; i++){
          
//       let checking = b[i]
      
//   console.log('checking',checking )
//   console.log('hashA[a[i]]',hashA[a[i]] )

      
      
//       if(!distinctA.has(b[i]) && hashA[a[i]] > 1){
//           hashA[a[i]]--
//           // distinctA.delete(a[i])
//           distinctA.add(b[i])
          
          
//           // hashB[b[i]] = (hashA[b[i]] || 0) + 1
          
//           // let temp = a[i]
//           // a[i] = b[i]
//           // b[i] = temp
//           k--    
//       }
//   }
  
//   console.log(distinctA)
//   console.log(distinctA.size)
  
  
//   return distinctA.size
  
// }










/*
 * Complete the 'getMaximumDistinctCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 *  3. INTEGER k
 */

// function getMaximumDistinctCount(a, b, k) {
//     // Write your code here
    
    
//     console.log(a)
//     console.log(b)
//     console.log(k)
    
//     let n = a.length
    
//     let hashA = {}
//     let hashB = {}
    
//     for(let i = 0; i < n; i++){
//         if(hashA[a[i]]){
//             hashA[a[i]]++
//         } else{
//             hashA[a[i]] = 1
//         }
        
//         if(hashB[b[i]]){
//             hashB[b[i]]++
//         } else{
//             hashB[b[i]] = 1
//         }  
//     }
    
    
//     console.log(a)
    
    
//     a.sort((x,y) => hashA[y] - hashA[x] || x - y)
    
  
//     console.log('hashA',hashA)
//     console.log('hashB',hashB )
//     console.log('a',a)
    
    
    
//     let distinctA = new Set(a)
    
    
//     for(let i = 0; i < n && k > 0; i++){
            
//         let checking = b[i]
        
//     console.log('checking',checking )
//     console.log('hashA[a[i]]',hashA[a[i]] )

        
        
//         if(!distinctA.has(b[i]) && hashA[a[i]] > 1){
//             hashA[a[i]]--
//             // distinctA.delete(a[i])
//             distinctA.add(b[i])
            
            
//             // hashB[b[i]] = (hashA[b[i]] || 0) + 1
            
//             // let temp = a[i]
//             // a[i] = b[i]
//             // b[i] = temp
//             k--    
//         }
//     }
    
//     console.log(distinctA)
//     console.log(distinctA.size)
    
    
//     return distinctA.size
    
    
    

// }
// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const aCount = parseInt(readLine().trim(), 10);

//     let a = [];

//     for (let i = 0; i < aCount; i++) {
//         const aItem = parseInt(readLine().trim(), 10);
//         a.push(aItem);
//     }

//     const bCount = parseInt(readLine().trim(), 10);

//     let b = [];

//     for (let i = 0; i < bCount; i++) {
//         const bItem = parseInt(readLine().trim(), 10);
//         b.push(bItem);
//     }

//     const k = parseInt(readLine().trim(), 10);

//     const result = getMaximumDistinctCount(a, b, k);

//     ws.write(result + '\n');

//     ws.end();
// }



