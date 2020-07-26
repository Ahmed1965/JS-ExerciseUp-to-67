//Question # 1

var a = 10;

document.getElementById("a").innerHTML=("The value of a is: " + a);


var a = 10;
a = ++a;
document.getElementById("b").innerHTML=("<br>" + "<br>" + "Now the value of ++a is " + a);

a = ++a;
// a = 12
document.getElementById("c").innerHTML=("<br>" + "<br>" + "Now the value of ++a is " + a);


a = --a;
//a = 11
document.getElementById("d").innerHTML=("<br>" + "<br>" + "Now the value of --a is " + a);


a = --a;

document.getElementById("e").innerHTML=("<br>" + "<br>" + "Now the value of a-- is " + a);

//Question # 2

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

document.getElementById("result").innerHTML=("<br>" + "Question # 2 --> "  +  " " + result);        

document.getElementById("stage1").innerHTML=("explain").innerHTML=("<h4>Explaination </h4>");
document.getElementById("stage2").innerHTML=("At first stage --a, is equal to 2 and a is pre-decrement, therefore a = 1");

document.getElementById("stage3").innerHTML=("<br><br>" + "At second stage --a - --b, = 1");

document.getElementById("stage4").innerHTML=("<br><br>" + "At third stage --a - --b + ++b, = 2");

document.getElementById("stage5").innerHTML=("<br> " + "At fourth stage --a - --b + ++b + b--, = 3");

//Question # 3

//var i = prompt("Enter Your Name");

document.getElementById("greet").innerHTML=("<br>" + "Greetings, Mr. " + i);

//Question # 4


var x = +prompt("Enter Number for table");
var y;
for (var i = 1; i <= 10; i++) {

   if (Number.isNaN(x)){

        var z=5;

        y = i * z;

       var list = document.getElementById("table");

       list.innerHTML  += ("<ul> <li>" + z +' x ' + i + " = " + y +"</li> </ul>"); 
       console.log(list)

    }else{

        y = i * x;
        

        var list = document.getElementById("table1")

        list.innerHTML = ("<ul> <li>" + x + ' x' + i + "=" + y + "</li></ul>");
    }
}

