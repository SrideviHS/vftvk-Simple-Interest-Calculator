/* To compute simple interest */
function compute()
{
    var resultstr=" ";
	var principal = document.getElementById("principal").value;
	/* if principal entered is greater than 0 then calculate interest */
	if (validate()===true)
	{
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = principal * years * rate /100;
	var year = new Date().getFullYear()+parseInt(years);
	
	
	resultstr= "<br>"+ ' If you deposit ' + "<mark>" + principal + "</mark>" +
	', ' + "<br>" + ' at an interest rate of '+ "<mark>" + rate+ 
	'%' + "</mark>" + ',' +"<br>" + 'you will receive an amount of '+ "<mark>" + interest + "</mark>"+
	', ' + "<br>" + 'in the year ' + "<mark>" + year + "</mark>" + '.';
	}
	
	document.getElementById("result").innerHTML= resultstr
	
}
/*display rate selected in the range slider */
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText=rateval;
}
/* to validate if principal entered is positive number */
function validate()
{
	valid=true;
	var z = document.getElementById("principal").value;
    /*if(!z.match(/^\d+/)) */
	if (z <=0)
        {		
        alert("Please enter a positive number!")
		document.getElementById("principal").value=" ";
		document.getElementById("principal").focus();
			
		valid=false;
        }
	
		return valid;
	
}
