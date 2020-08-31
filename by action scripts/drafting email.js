//emailing 

//Selecting which SAE report it is initial v FUP
var FUP = " ";

if (this.getField("Group2").value == "Check Box3")
{
	var FUP = "Initial";
}
else if(this.getField("Group2").value == "Check Box4")
{
	var FUP = "Follow-up #" + this.getField("Text45").value;
}
else 
{
	var FUP = "SAE report for subject ";
}

//drafting email 
this.mailDoc({bUI: true, cTo: "NYUPCCsafetyreports@nyumc.org",cSubject: "SAE " + FUP + " Study " + this.getField("Text1").value + " subject " + this.getField("Subject ID").value, cMsg: "Hello,\n\nPlease see attached " + FUP + " SAE report for subject " + this.getField("Subject ID").value + "'s grade " + this.getField("Grade").value + " " + this.getField("Event Description").value + "."


});


