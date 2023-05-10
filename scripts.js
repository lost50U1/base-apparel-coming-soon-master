function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.getElementById("error").innerHTML = "Valid email address!";
document.form1.text1.focus();
return true;
}
else
{
document.getElementById("error").innerHTML = "Please provide a  valid email";
document.getElementById("error2").style.display = "inline";
document.form1.text1.focus();
return false;
}
}