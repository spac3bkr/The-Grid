
//INPUT SETUP
var frameRate = 60.0;
var tilesAmountHeight = 40;
var tilesAmountWidth= 21;
var tileSize = 10; //SQUARE
var duration = 30;
var margins = 100;

//DEFINE COMP SIZE
var compWidth = tileSize * tilesAmountWidth + margins;
var compHeight = tileSize * tilesAmountHeight + margins;

//CREATE MAIN COMP
var grid = app.project.items.addComp("Grid", compWidth, compHeight, 1, duration, frameRate);

//CREATE TILE
var tile = app.project.items.addComp("Tile", tileSize, tileSize, 1, duration, frameRate);
tile.layers.addSolid([1.0,0.1,0.5], "Solid", tileSize, tileSize, 1, duration);

//GET 1ST TILE POSITION
var positionX = (margins / 2) + (tileSize / 2); // +  (tileSize / 2);
var positionY = (margins / 2) + (tileSize / 2); // + (tileSize / 2);
var i = 1;

for (v = 1 ; v <= tilesAmountHeight ; v++){

	while(i <= tilesAmountWidth){
		
		grid.layers.add(tile).position.setValue([positionX, positionY, 0.0]);
		positionX += tileSize;
		i++;

	}

	positionY += tileSize;
	var positionX = (margins / 2) + (tileSize / 2);
	var i=1;
	//positionX = tileSize / 2;
	//i = 1;
	

}


//grid.width = compWidth + 500;
//grid.height = compHeight + 500;







