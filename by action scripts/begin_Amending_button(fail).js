var name = app.response("NOTE: You can only do this once. If you need to begin amending again return to the original form. \n \n Who is making revisions/amendments?")

if (name != "")

{this.getField("begin_editing").display = display.hidden;
for (var i=0; i<this.numFields; i++) {
    var f = this.getField(this.getNthFieldName(i));
    if (f==null) continue;
    f.readonly = false;
}
o_trialID = this.getField("Text1").value; 
o_PI = this.getField("Text2").value; 
o_narrative1 = this.getField("Narrative Description of EventRow1").value;
o_narrative2 = this.getField("Narrative Description of Event").value;}else if (name == ""){    this.getField("begin_editing").display = display.visible;
} 

else{
this.getField("begin_editing").display = display.visible;} 



//extract pages old way 
//this.extractPages(0,3);

