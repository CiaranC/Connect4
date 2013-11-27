//Append to HTML
var grid;

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

// Random Color Function

function randomColor () {
    if(Math.random()>0.5){
        return "blue";
    }

    else{
        return "red";
    }

}

//Create Grid
 
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



//Ruairi code

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
                    alert("winner");
                 }
        }

    }
}










