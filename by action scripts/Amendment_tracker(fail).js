var today = new Date();var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();if (this.getField("Text1").value != o_trialID){one = ("Trial ID was changed from " +o_trialID + " to " + this.getField("Text1").value + " by "+ identity.name + " on " + date + "\n");}
else {one = "";}
if (this.getField("Text2").value != o_PI){two = ("Investigator was changed from " +o_PI + " to " + this.getField("Text2").value + " by "+ identity.name + " on " + date + "\n");}
else {two = "";}


if (this.getField("Narrative Description of EventRow1").value != o_narrative1 || this.getField("Narrative Description of Event").value != o_narrative2){three = ("The narrative was changed from by " + identity.name + " on " + date + " please refer to the previous submissions to see changes \n");}else {three = "";}

{event.value = one + two + three

;}

//begin editing button
o_trialID = this.getField("Text1").value
o_PI = this.getField("Text2").value
o_narrative1 = this.getField("Narrative Description of EventRow1").value 
o_narrative2 = this.getField("Narrative Description of Event").value
this.resetForm(["Amendments"]);