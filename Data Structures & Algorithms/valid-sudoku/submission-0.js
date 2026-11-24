class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const setrow= Array.from({length:9},()=>new Set()) ;
        const setcol = Array.from({length:9},()=>new Set()) ;
        const setbox = Array.from({length:9},()=>new Set()) ;
        for (let i=0 ; i<9 ; i++){
            for (let j=0; j<9;j++){
                const value=board[i][j];
                if (value === ".") continue ; 
                const k = Math.floor(i/3) *3 +Math.floor(j/3) ; 
                if(setrow[i].has(value) || setcol[j].has(value) ||setbox[k].has(value)) {
                    return false ;  
                }
                  setrow[i].add(value);
            setcol[j].add(value);
            setbox[k].add(value);
            }
        }
        return true ; 
        }
    }

