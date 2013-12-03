//Append to HTML//////////////////////////////////////////////////////

var gameboard = createTheBoard(6, 7);

    for (var i = 0; i < 6; i++) { 
        for (var j = 0; j < 7; j++) {
            var ulGrid = document.getElementById("grid");
            var listItem = document.createElement("li");
            listItem.className=(gameboard[i][j]);
            ulGrid.appendChild(listItem);
        }
    }


checkWinner("blue");


// Random Color Function///////////////////////////////////////////////

function randomColor () {
    if(Math.random()>0.5){
        return "blue";
    }

    else{
        return "red";
    }

}

// // Empty slot function////////////////////////////////////////////

// function emptySlot(){
//     return "empty";
// }

//Create Grid////////////////////////////////////////////////////////////

function createTheBoard(rows, cols) { // 6 rows 7 cols
    var i; //rows
    var j; //columns
    grid = new Array(rows);
 
    for (i = 0; i < rows; i++) {
 
        grid[i] = new Array(cols);
 
        for (j = 0; j < cols; j++) {
            grid[i][j] = randomColor();

        }
    }
    return (grid);


}



//Check for winner loops//////////////////////////////////////////////////////////////////////

function checkWinner(colour){ // e.g.  = "red"

    //loop 1 - check for a horizontal winner
    for(var rows = 0; rows < 6; rows++) //loop horizontally through the columns from the left
    {
        for(var cols = 0; cols < 4; cols++) //loop through the rows from the bottom
        {
            if (gameboard[rows][cols]== colour &&
                
                gameboard[rows][cols+1]== colour &&
                
                gameboard[rows][cols+2]== colour &&
                
                gameboard[rows][cols+3]== colour)

                 {
                    console.log("winner horz");
                 }
        }

    }

    //loop 2 - check for a vertical winner
    for(var cols = 0; cols < 7; cols++) //loop through the cols from the bottom
    {
        for(var rows = 0; rows < 3; rows++) //loop through the rows from the left
        {
            if( gameboard[rows][cols] == colour &&

                gameboard[rows + 1][cols] == colour &&

                gameboard[rows + 2][cols] == colour &&

                gameboard[rows + 3][cols] == colour )

                {
                    console.log("winner vert");
                }
        }
    }

    //loop 3 - check for a diagonal upwards from left winner
    for(var cols = 0; cols < 4; cols++) //loop through the cols from the bottom
    {
        for(var rows = 0; rows < 3; rows++) //loop through the rows from the left
        {
            if( gameboard[rows][cols] == colour &&

                gameboard[rows + 1][cols + 1] == colour &&

                gameboard[rows + 2][cols + 2] == colour &&

                gameboard[rows + 3][cols + 3] == colour )

                {
                    console.log("winner diag from left");
                }
        }
    }

    //loop 4 - check for a diagonal upwards from right winner
    for(var cols = 3; cols < 8; cols++) //loop through the cols from the bottom
    {
        for(var rows = 0; rows < 3; rows++) //loop through the rows from the left
        {
            if( gameboard[rows][cols] == colour &&

                gameboard[rows + 1][cols - 1] == colour &&

                gameboard[rows + 2][cols - 2] == colour &&

                gameboard[rows + 3][cols - 3] == colour )

                {
                    console.log("winner diag from right");
                }
        }
    }



}



///////////////////////////////////////////////////////////////////////////////////////






