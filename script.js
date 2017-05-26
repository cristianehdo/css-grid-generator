TABLEWIDTH = 1190;
TABLEHEIGHT = 720;
COLBORDER = 1;
COLNUMBER = 18;
LINENUMBER = 9;
// CLASSES = {};

function createGrid(){
	var width = TABLEWIDTH / (COLNUMBER + COLBORDER);
	var heigth = TABLEHEIGHT / (LINENUMBER + COLBORDER);
	for (var i = 1; i <= COLNUMBER; i++){
		CLASSES["col"+ i ] = {"width" :  width + ";", "heigth" : heigth + ";"};
	}

}

createGrid();