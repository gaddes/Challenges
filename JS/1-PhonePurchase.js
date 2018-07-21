const PHONE_COST = 99;

var phoneCount = 0;
var numberOfNewPhones = 0;
var bankBalance = 300;

function purchase() {
	numberOfNewPhones = prompt("How many phones would you like to purchase?");
	var totalPhoneCost = numberOfNewPhones * PHONE_COST;
	if (totalPhoneCost < bankBalance) {
    	bankBalance -= totalPhoneCost;
		alert("Congratulations, you have purchased " + numberOfNewPhones + " new phone(s) at a total cost of £" + totalPhoneCost + ". Your bank balance is now £" + bankBalance);
	} else {
		alert("Sorry, you do not have enough funds in your account. " + numberOfNewPhones + " phone(s) costs £" + totalPhoneCost + " and your bank balance is £" + bankBalance);
    }
}
