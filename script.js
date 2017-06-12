TABLEWIDTH = 1190;
TABLEHEIGHT = 720;
COLBORDER = 1;
COLNUMBER = 18;
LINENUMBER = 9;


$(document).ready(function(){ 
	function createGrid(){
		var width = Math.round(TABLEWIDTH / (COLNUMBER + COLBORDER));
		var heigth = Math.round(TABLEHEIGHT / (LINENUMBER + COLBORDER));
		var classes = {
			".col" : { 
				"width" :  width + "px;", 
				"heigth" : heigth + "px;"
			}
		};

		for (var i = 0; i < COLNUMBER; i++){
			var pLeft = i * (width + COLBORDER);
			classes[".col" + (i+1)] = {
				"position" : "relative;",
				"left" : pLeft + "px;"
			};
		}
		for (var y = 0; y < LINENUMBER; y++){
			var ptop = y * (heigth + COLBORDER);
			classes[".line" + (y+1)] = {
				"top" : ptop + "px;"
			};
		}
		classes = JSON.stringify(classes, null, "    ").replace(/[\"\,]/g, "").replace(/\:\s\{/g, " {");
		$("#textArea").text(classes);

	}
	createGrid();

});
