
//question # 1

var num1 = 6;

var num2 = 8;

var num3 = num1 + num2;

document.getElementById("sum").innerHTML = "Sum of " + num1 + " and " + num2 + " " + "is" + num3;


//Question 2

var num4 = 8;

var num5 = 6;

var num6 = num4 - num5;

document.getElementById("minus").innerHTML = "Subtraction of " + num4 + " and " + num5 + " " + "is " + num6;

var num7 = 44;

var num8 = 8;

var num9 = num7 * num8;

document.getElementById("multiply").innerHTML = "Multipl of " + num7 + " and " + num8 + " " + "is " + num9;

var num10 = 22;

var num11 = 2;

var num12 = num10 / num11;

document.getElementById("division").innerHTML = "Division of " + num10 + " and " + num11 + " " + "is " + num12;

var num13 = 44;

var num14 = 8;

var num15 = num13 % num14;

document.getElementById("module").innerHTML = "Reminder of " + num13 + " and " + num14 + " " + "is " + num15;


//question # 3


var myNum ;

document.getElementById("myNum").innerHTML = " a) Value  of  declared Variable   is:" + " " + myNum; 


var myNum = 20;

document.getElementById("myNum1").innerHTML =  " d) Initial value : " + " " + myNum;

myNum += 1; 

document.getElementById("myNum2").innerHTML = " f) Value after increment is" + " " + myNum;

myNum = myNum + 7;

document.getElementById("myNum3").innerHTML = " h) Value after addition is" + " " + myNum;

myNum = myNum - 8;

document.getElementById("myNum4").innerHTML = " j) Value after decrement is" + " " + myNum;

myNum = myNum % 3;

document.getElementById("myNum5").innerHTML = "l) The remainder is: " + " " + myNum;


//Question # 4

var ticket = 600;

var totTicket = 5;

var sumTicket = ticket*totTicket;

document.getElementById("ticket").innerHTML = "Total Cost to buy 5 tickets to a movie is " + " " + sumTicket + " PKR ";

//Question # 5


var d = 1;

var e = 7;

var i = 0;

for (var i = 0 ; i <= 10; i++){
    d = e * i;
    var list = document.getElementById('table');
    list.innerHTML += '<ul> <li>'+ e + "  x " +  i + " = " + d+"</li></ul>"

 }

//Questiom # 6

var temp = 25;
var temp1 = 70
var tempC = (25 * 9/5)+32;
var tempf = (70 - 32) * 5/9;  

document.getElementById("tempC").innerHTML= temp + "<sup>o</sup>" + " C   " + " is " + tempC + "<sup>o</sup>" + " F";

document.getElementById("tempf").innerHTML= temp1 + "<sup>o</sup>" + " F   " + " is " + tempf + "<sup>o</sup>" + " C";

//Question # 7

var priceItem1 = 650;
var qtyItem1 = 3;
var priceItem2 = 100;
var qtyItem2 = 7;
var shipCharge = 100;

var totalPriceItem1 = priceItem1 * qtyItem1;
var totalPriceItem2 = priceItem2 * qtyItem2;
var totalCost = totalPriceItem1 + totalPriceItem2+shipCharge;

document.getElementById("priceItem").innerHTML= "Price of item 1 is " + priceItem1 + "<br>" + " Quanitity of item 1 is " + qtyItem1 + "<br>" + "Price of Item 2 is " + priceItem2 + "<br>" + " Quanitity of Item 2 is " + qtyItem2 + "<br>" + " Shipping Charges " + shipCharge + "<br>"+"<br>"+"<br>" + "Total Cost of your Order is " + totalCost; 

//Question # 8


var totalMarks = 980;
var marksObtained = 804;
var percentage = (804/980)* 100;

document.getElementById("marks").innerHTML = totalMarks + "<br>" + "Marks Obtained: " + marksObtained  + "<br>" + " Percentage: " + percentage;

//Question # 9

var dollar = 10;
var sRiyals = 25;
var totalCurrency = (dollar * 104.80) + (sRiyals * 28);

document.getElementById("currency").innerHTML= " Total Currency in PKR: " +   totalCurrency;

//Question # 10

var addNum = 5;
addNum1 = (addNum * 10) / 2;
 
document.getElementById("addNum").innerHTML=  "The number is " + addNum1;


//Question # 11

var currentYear = 2020;
var birthYear = 1990;
var currentAge = currentYear - birthYear;

document.getElementById("birthYear").innerHTML= + "Current Year:" + " " + currentYear + "<br>" + "Birth Year:" + birthYear + "<br>"  + "Your Age is: " + currentAge ;

//Question # 12

var radiusCircle = 20;
var circumfrence = (2 * 3.142) * 20;
var circleArea = (3.142 * 20) * 20 ;

document.getElementById("area").innerHTML= ("Radius of a circle: " + radiusCircle + "<br>" + "The circumference is: " + circumfrence + "<br>"  + "The area is: " + circleArea );

//Question # 13

var favoriteSnack = " Spiced Chips ";
var currentAge = 40;
var maximumAge = 65;
var estimatedAmountOfSnack = 2;
var restOfLife = (maximumAge - currentAge) * estimatedAmountOfSnack;

document.getElementById("snack").innerHTML=("Favourite Snack: " + favoriteSnack +("<br>") + "Current Age: " + currentAge + "<br>" + "Estimated Maximum Age : " + maximumAge + "<br>" + "Amount of snacks per day " + estimatedAmountOfSnack +"<br> " + "You will need " + restOfLife + favoriteSnack + "to last you untill the ripe old age of " + maximumAge);  


