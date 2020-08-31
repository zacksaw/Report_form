//Duplicate button 

//begin editing button

var FUP = " ";if (this.getField("Check Box3").value == "Yes"){	var FUP = "Initial";}else if(this.getField("Check Box4").value == "Yes"){	var FUP = "Follow-up #" + this.getField("Text45").value;}else if(this.getField("Check Box5").value == "Yes"){	var FUP = "Final";}else {	var FUP = "SAE report for subject ";}



for(var i=0,j=0; i<this.numPages; i+=4) {var oNewDoc = this.extractPages({nStart: i, nEnd: i + 3});  var cFlName = FUP; var cPath = oNewDoc.path.replace(oNewDoc.documentFileName,cFlName); oNewDoc.saveAs(cPath);}


}



for(var i=0,j=0; i<this.numPages; i+=4) {o_trialID = this.getField("Text1").value; o_PI = this.getField("Text2").value; o_narrative1 = this.getField("Narrative Description of EventRow1").value; o_narrative2 = this.getField("Narrative Description of Event").value; var oNewDoc = this.extractPages({nStart: i, nEnd: i + 3});  var cFlName = "HBabner@bugywhips.com_1040.pdf"; var cPath = oNewDoc.path.replace(oNewDoc.documentFileName,cFlName); oNewDoc.saveAs(cPath); oNewDoc.mailDoc(false, "HBabner@bugywhips.com");  this.resetForm(["Amendments"]);}