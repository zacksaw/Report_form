//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

//<Document-Level>
//<ACRO_source>when_open</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:when_open ***********/
this.addField("signature1", "signature", 3, [348.6969909667969,163.73199462890625,574.7550048828125,135.05799865722656]);
this.addField("signature2", "signature", 3, [254.89846801757812,115.96490478515625,531.9620361328125,90.10565185546875]);
calculateNow()
//</ACRO_script>
//</Document-Level>

//<AcroForm>
//<ACRO_source>Amendments:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Amendments:Calculate ***********/
if (this.getField("Text45").value == "1"){
    var follow_up = "the intial report"}
    
else if (this.getField("Text45").value != "1" || this.getField("Text45").value != ""){
   s =  this.getField("Text45").value;
    var follow_up = ("Follow-up " + ( s - 1));
    }
if (this.getField("Text45").value != ""){
var header = ("Please refer to " + follow_up + " for original values.");
}
else {header =""}
event.value = header;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Check Box1:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Check Box1:Annot1:MouseUp:Action1 ***********/
app.alert({cMsg: "All changes to the narrative sections must be in the format below:\n\n[date of change or clinical update]: Explanation of event\n\ni.e., 1/1/2020: Patient was discharged from the hospital. \n", nType: 0, nIcon: 3});
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Check Box12:Annot1:MouseDown:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Check Box12:Annot1:MouseDown:Action1 ***********/
app.alert({cMsg: "Make sure you include the following individuals in your email:\nPI\nTreating physician\nStudy specific medical monitor\nData team\nRegulatory team\nProgram manager\nNurse manager\nQA Specialist", nType: 0, nIcon: 3});
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Check Box16:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Check Box16:Annot1:MouseUp:Action1 ***********/
app.alert({cMsg: "An event is Related to the research procedures if in the opinion of the Principal Investigator, it was more likely than not to be caused by the research procedures or if it is more likely than not that the event affects the rights and welfare of current subjects.", nType: 0, nIcon: 3});
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Check Box17:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Check Box17:Annot1:MouseUp:Action1 ***********/
app.alert({cMsg: "Any physical, psychological or social harm occurring to subjects during the course of participating in research, whether or not it is related to participation in the research.", nType: 0, nIcon: 3});
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Check Box2:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Check Box2:Annot1:MouseUp:Action1 ***********/
app.alert({cMsg: "An event is Unanticipated or Unexpected when its nature, frequency, specificity and severity are not expected, given the research procedures described in the protocol-related documents and characteristics of the subject population being studied, and are not accurately reflected in the informed consent document, protocol and/or investigator’s brochure.", nType: 0, nIcon: 3});
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Draftemail:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Draftemail:Annot1:MouseUp:Action1 ***********/
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

var email_body = ("Hello,\n\nPlease see attached " + FUP + " report for subject " + this.getField("Subject ID").value + "'s " + this.getField("Event Description").value + "." + "\n" + "\nSynopsis of event:\n" + this.getField("Pre_narrative").value)
//drafting email 
this.mailDoc({bUI: true, cTo: "insert email",cSubject: "SAE " + FUP + " Study " + this.getField("Text1").value + " subject " + this.getField("Subject ID").value, cMsg: email_body



});
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Pre_narrative:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Pre_narrative:Calculate ***********/
//Narrative
//Subject
//Sex is 
var is_sex = ""
if (this.getField("Sex").value == "Check Box14")
{is_sex = "female";}

else if (this.getField("Sex").value == "Check Box15")
{is_sex = "male";}

else 
{is_sex = "";}

//calculate age
var is_age = "";
dobValue = this.getField("Date of Birth").value;
if (dobValue!="") {
	dob = util.scand("mm/dd/yyyy", dobValue);
	now = new Date();
	age = now.getFullYear() - dob.getFullYear();
	if (now.getMonth() < dob.getMonth())
	age--;
	else if (now.getMonth()==dob.getMonth() && now.getDate() < dob.getDate())
	age--;
	var is_age = age;
	}	

//subject variable
var subject_ = ""
if (this.getField("Subject ID").value != "")
{subject_ = ("Subject " + this.getField("Subject ID").value + " is a "+ is_age + " y/o " + is_sex + ". ");}
else 
{subject_ = "";}

//Which hospital
var hospital = ""
if (this.getField("Check Box44").value == "Yes")
    {hospital = ("They presented to X");}
    else if 
    (this.getField("hospital").value != "")
    {hospital = ("They presented to " + this.getField("hospital").value);}
    else 
    {hospital = "";}


//grade + AE
var grade = "";
if (this.getField("Grade").value != ""){grade = (" with grade " + this.getField("Grade").value + " " + this.getField("Event Description").value + " on " + this.getField("Event Start Date").value + ".\n\n");}
else 
{grade = "";}

//Consent date
var consent = "";
if (this.getField("ICF_date_af_date").value != ""){consent = (" Subject signed consent on " + this.getField("ICF_date_af_date").value + " for study " + this.getField("Text1").value + ".\n\n");}
else 
{consent = "";}


//last administration 
var dates = [this.getField("Date of Last TreatmentRow1").value,this.getField("Date of Last TreatmentRow2").value,this.getField("Date of Last TreatmentRow3").value,this.getField("Date of Last TreatmentRow4.0").value,this.getField("Date of Last TreatmentRow4.1").value,this.getField("Date of Last TreatmentRow4.2").value];
function max_date(all_dates) {
var max_dt = all_dates[0],
  max_dtObj = new Date(all_dates[0]);
all_dates.forEach(function(dt, index)
  {
  if ( new Date( dt ) > max_dtObj)
  {
  max_dt = dt;
  max_dtObj = new Date(dt);
  }
  });
 return max_dt;
  }
var latest_date = ""
if (this.getField("Date of Last TreatmentRow1").value != ""){latest_date = ("The most recent administration of investigational product(s) was on " + max_date(dates) + ".\n" );}
else 
{latest_date = "";}


//medications modification list
var row_1_language = "";
if (this.getField("DrugRow1").value!=""){row_1_language = 
"The MD decided to " + this.getField("Dropdown3.0").value + " " + this.getField("DrugRow1").value ;}
else 
{row_1_language = "";}

var row_2_language = "";
if (this.getField("DrugRow2").value!=""){row_2_language = 
", " + this.getField("Dropdown3.1").value + " " + this.getField("DrugRow2").value;}
else 
{row_2_language = "";}

var row_3_language = "";
if (this.getField("DrugRow3").value!=""){row_3_language = 
", " + this.getField("Dropdown3.2").value + " " + this.getField("DrugRow3").value;}
else 
{row_3_language = "";}

var row_4_language = "";
if (this.getField("DrugRow4.0").value!=""){row_4_language = 
", " + this.getField("Dropdown3.3.0").value + " " + this.getField("DrugRow4.0").value;}
else 
{row_4_language = "";}

var row_5_language = "";
if (this.getField("DrugRow4.1").value!=""){row_5_language = 
", " + this.getField("Dropdown3.3.1").value + " " + this.getField("DrugRow4.1").value;}
else 
{row_5_language = "";}

var row_6_language = "";
if (this.getField("DrugRow4.2").value!=""){row_6_language = 
", " + this.getField("Dropdown3.3.2").value + " " + this.getField("DrugRow4.2").value;}
else 
{row_6_language = "";}

//modifications
var med_mods = "";
if (this.getField("DrugRow1").value!=""){med_mods = row_1_language + row_2_language + row_3_language + row_4_language + row_5_language + row_6_language + "." ;}
else 
{med_mods = "";}


//EVENT DESCRIPTION
{event.value = (subject_ + hospital +  grade + consent + latest_date + med_mods);}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>duplicate:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:duplicate:Annot1:MouseUp:Action1 ***********/
extractPages(0,3);
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>scripts:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:scripts:Calculate ***********/
//Dose delay drown down reveal
if (
  this.getField('Dropdown3.0').value == 'delay' ||
  this.getField('Dropdown3.0').value == 'reduce' ||
  this.getField('Dropdown3.0').value == 'discontinue' ||
  this.getField('Dropdown3.1').value == 'delay' ||
  this.getField('Dropdown3.1').value == 'reduce' ||
  this.getField('Dropdown3.1').value == 'discontinue' ||
  this.getField('Dropdown3.2').value == 'delay' ||
  this.getField('Dropdown3.2').value == 'reduce' ||
  this.getField('Dropdown3.2').value == 'discontinue' ||
  this.getField('Dropdown3.3.0').value == 'delay' ||
  this.getField('Dropdown3.3.0').value == 'reduce' ||
  this.getField('Dropdown3.3.0').value == 'discontinue' ||
  this.getField('Dropdown3.3.1').value == 'delay' ||
  this.getField('Dropdown3.3.1').value == 'reduce' ||
  this.getField('Dropdown3.3.1').value == 'discontinue' ||
  this.getField('Dropdown3.3.2').value == 'delay' ||
  this.getField('Dropdown3.3.2').value == 'reduce' ||
  this.getField('Dropdown3.3.2').value == 'discontinue') 
{
  this.getField('reason_reduce').display = display.visible;
  this.getField('date_dose_reduction').display = display.visible;
	if (this.getField('Dropdown3.0').value == 'reduce' ||
  	this.getField('Dropdown3.1').value == 'reduce' ||
  	this.getField('Dropdown3.2').value == 'reduce' ||
  	this.getField('Dropdown3.3.0').value == 'reduce' ||
  	this.getField('Dropdown3.3.1').value == 'reduce' ||
  	this.getField('Dropdown3.3.2').value == 'reduce') 
	{
 	this.getField('new_dose').display = display.visible;
	}
	else {
  	this.getField('new_dose').display = display.hidden;
	}
}
else 
{
  this.getField('reason_reduce').display = display.hidden;
  this.getField('date_dose_reduction').display = display.hidden;
}

//Possibly related drop down reveal
if (
  (this.getField('Dropdown2.0.0').value == 'unlikely' ||
  this.getField('Dropdown2.0.0').value == 'unrelated' ||
  this.getField('Dropdown2.0.0').value == 'Unknown' )&&

  (this.getField('Dropdown2.0.1').value == 'unlikely' ||
  this.getField('Dropdown2.0.1').value == 'unrelated' ||
  this.getField('Dropdown2.0.1').value == 'Unknown' ||
  this.getField('Dropdown2.0.1').value == 'Choose One' )&&

  (this.getField('Dropdown2.0.2').value == 'unlikely' ||
  this.getField('Dropdown2.0.2').value == 'unrelated' ||
  this.getField('Dropdown2.0.2').value == 'Unknown' ||
  this.getField('Dropdown2.0.2').value == 'Choose One' )&&

  (this.getField('Dropdown2.0.3.0').value == 'unlikely' ||
  this.getField('Dropdown2.0.3.0').value == 'unrelated' ||
  this.getField('Dropdown2.0.3.0').value == 'Unknown' ||
  this.getField('Dropdown2.0.3.0').value == 'Choose One' )&&

  (this.getField('Dropdown2.0.3.1').value == 'unlikely' ||
  this.getField('Dropdown2.0.3.1').value == 'unrelated' ||
  this.getField('Dropdown2.0.3.1').value == 'Unknown' ||
  this.getField('Dropdown2.0.3.1').value == 'Choose One' )&&

  (this.getField('Dropdown2.0.3.2').value == 'unlikely' ||
  this.getField('Dropdown2.0.3.2').value == 'unrelated' ||
  this.getField('Dropdown2.0.3.2').value == 'Unknown' ||
  this.getField('Dropdown2.0.3.2').value == 'Choose One' )
) {
  this.getField('if_unrelated').display = display.visible;
} else {
  this.getField('if_unrelated').display = display.hidden;
}

//Reportable checkboxes
if (
  this.getField('Check Box2').value == 'On' &&
  this.getField('Check Box16').value == 'Yes' &&
  this.getField('Check Box17').value == 'Yes'
) {
  this.getField('Group3').value = 'Check Box39';
} else {
  
  this.getField('Group3').value = 'Check Box40';
}

//Duplicate button for follow-up
if (this.getField('Group2').value == 'Check Box4') {
  this.getField('duplicate').display = display.visible;
} else {
  this.getField('duplicate').display = display.hidden;
}

sig_1 = ""
sig_2 = ""

var Info1 = this.getField("signature1").signatureInfo();
var Info2 = this.getField("signature2").signatureInfo();
// some standard signatureInfo properties
if (Info1.name != null)
{sig_1 = Info1.name}
else 
{sig_1 = ""}
if (Info2.name != null)
{sig_2 = Info2.name}
else 
{sig_2 = ""}

var sig_1 = sig_1.split(' ').slice(0,2).join(' ');
var sig_2 = sig_2.split(' ').slice(0,2).join(' ');

if (sig_1 != "" || sig_2 != ""){
name =  sig_1 + " " + sig_2;
}

if (Info2.name == undefined || Info2.name == "" || Info2.name == null)
{for (var i=0; i<this.numFields; i++) {
    var f = this.getField(this.getNthFieldName(i));
    if (f==null) continue;
    f.readonly = false;}
this.getField("Pre_narrative").readonly = true



}
else {for (var i=0; i<this.numFields; i++) {
    var f = this.getField(this.getNthFieldName(i));
    if (f==null) continue;
    f.readonly = true;}
this.getField("Group2").readonly = false
this.getField("duplicate").readonly = false
this.getField("Text45").readonly = false
this.getField("Draftemail").readonly = false

}

if (this.getField("Group2").value == "Check Box4")
{
	this.getField('Text5').display = display.visible;
	this.getField('Text6').display = display.visible;
	this.getField('Text8').display = display.visible;
	this.getField('Text7').display = display.visible;
	this.getField('Text9').display = display.visible;
	this.getField('Check Box1').display = display.visible;
	this.getField('Check Box3').display = display.visible;
	this.getField('Check Box4').display = display.visible;
	this.getField('Text8').readonly = true;
	this.getField('Text7').readonly = true;
	this.getField('Text9').readonly = true;
}
else if(this.getField("Group2").value == "Check Box3")
{
	this.getField('Text5').display = display.hidden;
	this.getField('Text6').display = display.hidden;
	this.getField('Text8').display = display.hidden;
	this.getField('Text7').display = display.hidden;
	this.getField('Text9').display = display.hidden;
	this.getField('Check Box1').display = display.hidden;
	this.getField('Check Box3').display = display.hidden;
	this.getField('Check Box4').display = display.hidden;
}

this.getField('Amendments').readonly = true;

if (this.getField("Check Box50").value == "Yes"){
  this.getField('Grade').display = display.hidden;
}
else if (this.getField("Check Box50").value == "Off"){
  this.getField('Grade').display = display.visible;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>signature2:Format</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:signature2:Format ***********/
calculateNow();
//</ACRO_script>
//</AcroForm>

