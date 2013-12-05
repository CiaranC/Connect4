//Append to HTML//////////////////////////////////////////////////////
var player = "Ken";
var gameboard = createTheBoard(6, 7);
drawBoard();

function drawBoard () {

    var ulGrid = document.getElementById("grid");
    ulGrid.innerHTML="";

    for (var i = 0; i < 6; i++) { 
        for (var j = 0; j < 7; j++) {
            var listItem = document.createElement("li");

            if (listItem.addEventListener) {
                listItem.addEventListener("click", function(){userMove(this)}, false);
            } 
            else {
                listItem.attachEvent('onclick', userMove(this));
            }  

            listItem.className=(gameboard[i][j]);
            ulGrid.appendChild(listItem);
        }
    }
}


function switchPlayer (argument) {
    if (player == "Ken"){
        player = "Ryu";
    }
    else{
        player="Ken";
    }
}

function userMove(gamePiece) {
    var row = parseInt(gamePiece.className.substr(3,1));
    var col = parseInt(gamePiece.className.substr(8,1));

    if (row<5){
        for (var i = 5; i >= row+1; i--) {
            if(gameboard[i][col].indexOf("empty")> -1){
                return;
            }
    }
};

 gameboard[row][col] = gameboard[row][col].replace("empty",player);
 playRandomSound();
 drawBoard();
 checkWinner(player);
 switchPlayer();
}


// // Empty slot function////////////////////////////////////////////

function emptySlot(row, col){
    return "row" + row + " col" + col + " empty";
    onclick='playRandomSound()';
}

//Create Grid////////////////////////////////////////////////////////////

function createTheBoard(numRows, numCols) { // 6 rows 7 cols
    var row; //row
    var col; //column
    grid = new Array(numRows);
 
    for (row = 0; row < numRows; row++) {
 
        grid[row] = new Array(numCols);
 
        for (col = 0; col < numCols; col++) {
            grid[row][col] = emptySlot(row, col);

        }
    }
    return (grid);


}

//Check for winner loops//////////////////////////////////////////////////////////////////////

function checkWinner(colour){ // e.g.  = "Ken"

    //loop 1 - check for a horizontal winner
    for(var rows = 0; rows < 6; rows++) //loop horizontally through the columns from the left
    {
        for(var cols = 0; cols < 4; cols++) //loop through the rows from the bottom
        {
            if (gameboard[rows][cols].indexOf(colour) != -1  &&
                
                gameboard[rows][cols+1].indexOf(colour) != -1 &&
                
                gameboard[rows][cols+2].indexOf(colour) != -1 &&
                
                gameboard[rows][cols+3].indexOf(colour) != -1)

                 {
                    window.open(player+".html",'_self', false);


                 }
        }

    }

    //loop 2 - check for a vertical winner
    for(var cols = 0; cols < 7; cols++) //loop through the cols from the bottom
    {
        for(var rows = 0; rows < 3; rows++) //loop through the rows from the left
        {
            if( gameboard[rows][cols].indexOf(colour) != -1 &&

                gameboard[rows + 1][cols].indexOf(colour) != -1 &&

                gameboard[rows + 2][cols].indexOf(colour) != -1 &&

                gameboard[rows + 3][cols].indexOf(colour) != -1 )

                {
                    window.open(player+".html",'_self', false);
                }
        }
    }

    //loop 3 - check for a diagonal upwards from left winner
    for(var cols = 0; cols < 4; cols++) //loop through the cols from the bottom
    {
        for(var rows = 0; rows < 3; rows++) //loop through the rows from the left
        {
            if( gameboard[rows][cols].indexOf(colour) != -1 &&

                gameboard[rows + 1][cols + 1].indexOf(colour) != -1 &&

                gameboard[rows + 2][cols + 2].indexOf(colour) != -1 &&

                gameboard[rows + 3][cols + 3].indexOf(colour) != -1 )

                {
                    window.open(player+".html",'_self',false);
                }
        }
    }

    //loop 4 - check for a diagonal upwards from right winner
    for(var cols = 3; cols < 7; cols++) //loop through the cols from the bottom
    {
        for(var rows = 0; rows < 3; rows++) //loop through the rows from the left
        {
            if( gameboard[rows][cols].indexOf(colour) != -1 &&

                gameboard[rows + 1][cols - 1].indexOf(colour) != -1 &&

                gameboard[rows + 2][cols - 2].indexOf(colour) != -1 &&

                gameboard[rows + 3][cols - 3].indexOf(colour) != -1 )

                {
                    window.open(player+".html",'_self', false);
                }
        }
    }



}

//////////////sound fx

function playRandomSound(){

      //Array of all sound fx
      var sounds = [ "audio/1.wav",
                     "audio/2.wav",
                     "audio/5.wav",
                     "audio/6.wav",
                     "audio/7.wav",
                     "audio/9.wav",]
      
      // select a random sound to play 
      var soundFile = sounds[Math.floor(Math.random()*sounds.length)];
      
      //Find the player element that you created and generate an embed file to play the sound within it
      document.getElementById("player").innerHTML="<embed src=\""+soundFile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

///////////////////////////////////////////////////////////////////////////////////////






