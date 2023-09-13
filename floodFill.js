// 733. Flood Fill
// Easy
// 7.8K
// 762
// Companies
// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

 

// Example 1:


// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
// Example 2:

// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// Output: [[0,0,0],[0,0,0]]
// Explanation: The starting pixel is already colored 0, so no changes are made to the image.
 

// Constraints:

// m == image.length
// n == image[i].length
// 1 <= m, n <= 50
// 0 <= image[i][j], color < 216
// 0 <= sr < m
// 0 <= sc < n

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, color) {
    
  console.log(image);
  console.log(sr);
  console.log(sc);
  console.log(color);


  if(image[sr][sc] === color) return image


  let stack = [[sr,sc]]



  while(stack.length){
    let curr = stack.pop()

    let topPixel = [(curr[0] - 1), curr[1]]
    let leftPixel = [curr[0], (curr[1] - 1)]
    let rightPixel = [curr[0], (curr[1] + 1)]
    let bottomPixel = [(curr[0] + 1), curr[1]]

    let fourWay = [topPixel, leftPixel, rightPixel, bottomPixel]

    let currPixel = image[curr[0]][curr[1]]
    
    fourWay.forEach(pixel=>{
      console.log('=-=-=-=-=-=-=-=-=-=');
      console.log('=-=-=-=-=-=-=-=-=-=');
      console.log('=-=-=-=-=-=-=-=-=-=');
      console.log(pixel);
      console.log(pixel[0]);
      console.log(pixel[1]);

      console.log(image[pixel[0]]);


      let pixelCheck = image[pixel[0]][pixel[1]]
      if(pixelCheck === currPixel){
        stack.push(pixel)
      }
    })
    
    image[curr[0]][curr[1]] = color
  }



  return image
};

// let image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
let image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 1

console.log(floodFill(image, sr, sc, color));