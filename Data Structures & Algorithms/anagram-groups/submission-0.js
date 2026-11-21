class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for (const char of strs){
          const key= char.split("").sort().join("");
          if(!map.has(key)){
            map.set(key,[]);
          }
          map.get(key).push(char);

        }
        return Array.from(map.values());
        }
    
}
