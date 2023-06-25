// Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// a. 1 <= nums.length <= 10^4
// b. -2^31 <= nums[i] <= 2^31 - 1

function moveZeroes(nums) {
  let left = 0; // Pointer for non-zero elements
  let right = 0; // Pointer to traverse the array

  // Traverse the array
  while (right < nums.length) {
    // If the current element is non-zero
    if (nums[right] !== 0) {
      // Swap non-zero element to the left pointer position
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++; // Move the left pointer to the next position
    }
    right++; // Move the right pointer to the next position
  }
}

// Example usage:
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);

// Output:
// [ 1, 3, 12, 0, 0 ]
