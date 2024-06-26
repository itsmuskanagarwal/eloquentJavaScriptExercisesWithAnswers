/*
Understanding the question-

chessboard has black and white blocks. this is how chessboards would look with color(w=white, b=black)-

W-B-W-B-W-B Row 1
B-W-B-W-B-W Row 2
W-B-W-B-W-B Row 3
B-W-B-W-B-W Row 4
W-B-W-B-W-B Row 5
B-W-B-W-B-W Row 6
W-B-W-B-W-B Row 7
B-W-B-W-B-W Row 8

NOTE: '-' is just for readablity there is not space between W & B.
Now in code replace white with a space " " and black with #

It should look like-
| # # # #|
|# # # # |
| # # # #|
|# # # # |
| # # # #|
|# # # # |
| # # # #|
|# # # # |

NOTE: '|' is just for readablity.
*/

const gridSize = 8;

for(i=0; i<gridSize; i++){
    let row = '';
    for(j=0; j<gridSize; j++){
        row += i%2==0 ? ( j%2==0 ? ' ':'#'):( j%2!=0 ? ' ':'#');
    }
    console.log(row)
}