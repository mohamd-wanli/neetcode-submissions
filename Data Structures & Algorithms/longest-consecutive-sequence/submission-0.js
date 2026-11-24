class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
  let long = 0 ;
  for(const num of set) { 
    if(! set.has(num-1)){
      let length = 1; 
      let current = num ; 
      while(set.has(current+1)){
        current ++;
        length ++;
      }
     long = Math.max(long,length);
    }
  }
  return long ; 

    }
}
