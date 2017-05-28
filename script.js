TABLEWIDTH = 1190;
TABLEHEIGHT = 720;
COLBORDER = 1;
COLNUMBER = 18;
LINENUMBER = 9;


$(document).ready(function(){ 
	function createGrid(){
		var width = Math.round(TABLEWIDTH / (COLNUMBER + COLBORDER));
		var heigth = Math.round(TABLEHEIGHT / (LINENUMBER + COLBORDER));
		var classes = {};
		for (var i = 0; i < COLNUMBER; i++){
			var position = i * (width + COLBORDER);
			classes["col"+ (i+1) ] = {
				"width" :  width + "px;", 
				"heigth" : heigth + "px;", 
				"position" : "relative;",
				"left" : position +"px;"
			};
		}
		classes = JSON.stringify(classes, null, "    ").replace(/[\"\,]/g, "").replace(/col/g, ".col").replace(/\:\s\{/g, " {");
		$("#textArea").text(classes);

	}
	createGrid();

});