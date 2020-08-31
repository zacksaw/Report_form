//Duplicate button for follow-up
if (this.getField('Group2').value == 'Check Box4') {
  this.getField('duplicate').display = display.visible;
} else {
  this.getField('duplicate').display = display.hidden;
}

var sig_1 = ""
var sig_2 = ""

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