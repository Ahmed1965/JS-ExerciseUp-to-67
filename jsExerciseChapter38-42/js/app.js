function power(a, b){
a = 4;
b = 5;
//var c = a^b;
return (Math.pow(a, b)) 

}

document.getElementById("exponent").innerHTML=power((Math.pow()))

//Question # 2

function isLeapYear() {

    var year = document.getElementById("year").value;

    document.getElementById("year1").innerHTML = (year % 100 === 0) ? (year % 400===0): (year % 4 === 0);
}


//Question # 3

    var sidea = document.getElementById("sidea").value;

    var sideb = document.getElementById("sideb").value;

    var sidec = document.getElementById("sidec").value;

    var s = (sidea + sideb + sidec) / 2;

    var areavalue = Math.sqrt(
        
        s * (s - sidea)*(s - sideb) * (s - sidec)
        
        );

function triangle(){
    


    document.getElementById("result").innerHTML = "The area of a triangle with side laength " + sidea + ", "+ sideb + " ,"+ sidec +  "  is   =  " + " " +  areavalue
    
}

//Question # 4

var sub1;

var sub2;

var sub3;

var totMarks = 500;

var percentage = (sub1 + sub2 + sub3 ) / totMarks * 100;

var average = sub1 + sub2 + sub3 / 3;

var percent = document.getElementById("percent").value=percentage;

var ave = document.getElementById("average").value=average;

function main(){
return percentage , average

}
main(percentage, average)


//Question # 5

var myname="ahmed"

document.getElementById("myindex").innerHTML= "Index of my name 'e' is " + myname.indexOf("e");

//Question # 6


var str = "The Pakistan is a wounderful city"

function removeVowel(){

   return str.replace(/[aeiou]/gi, '');
    
}
document.getElementById("vowel").innerHTML=(removeVowel());


//Question # 7

var myStr = "Pleases read this application and give me gratuity"
var val = false;

var count = 0;
function occuranceVowel(){

    myStr.toLocaleLowerCase();

    
    
    count = 0;

    switch(seenVowel){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            
        if(val){
            count++
            val = false;
        }else{
            val = true;

        }
        break;
        
        val = false;


    }
    
   }

//Question # 8

var km = 2000;
var meters; 

function meters(){

    meters = km/1000;
    return meters;
}
document.getElementById("meters").innerHTML= "2000 km equals to " +  (meters()) + " "+  "meters";

var mtr = 2;

function convertMetersToFeet(feet){

    feet = mtr / 0.3045;

    return (feet)

}
document.getElementById("feet").innerHTML = "2000 km equals to  " + convertMetersToFeet() + " "  + " feet";

var inh = 39370.07874;

function convertKmToInch(inch){

    inch = km / inh;
    return inch;

}
document.getElementById("inch").innerHTML = " 2000 km are equals to  "  + convertKmToInch() + " " + " inche."

function convertKmToCentimeter(cm){

    cm = km * 100000;
    return cm;

}
document.getElementById("cenMeter").innerHTML = " 2000 km are equals to  "  + convertKmToCentimeter() + " " + " centimeters."

// Question # 9

var totalWorkHour = 40;
var totalWorkHourweek;
var exceedWorkHour;
var overTimepayPerhour = 12;
var otHour;

// converting total work hour into mintus for one week

totalWorkHourweek = totalWorkHour * 60 * 7;
exceedWorkHour = 10080;

function ot(){

    if( exceedWorkHour > totalWorkHourweek   ){
        
        otHour = exceedWorkHour - totalWorkHourweek;

    }
    
    return otHour
        
}
document.getElementById("ot").value=ot()


// Question # 10

var hundred;
var fifty;
var ten;


var myCash = prompt("How much cash you want to withdraw, 100, 50 & 10 only");

for ( hundred = 1; hundred < 11; hundred++){
    //console.log(hundred)
    console.log(hundred.length)
    //hundred.length = myCash;

}
for (fifty = 0; fifty > 50; fifty++){
    fifty=myCash.length;

}
for (ten = 0; ten > 10; ten++){
    ten=myCash.length;

}
if (myCash.length == hundred ){ //&& myCash == fifty && myCash == ten || myCash.length === j || myCash.length === k ){

    
}

document.getElementById("cash").innerHTML = "You have " + hundred.length + "hundred notes " + fifty.length + " fifty notes" + ten.length + "ten note" 




