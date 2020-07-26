//Qustion # 1


function myAlert(){
    return alert("welcom to mySite");

}
document.getElementById("Alert").innerHTML;

//Question # 2

function showAlert(){

    return alert ("Thank you for purchasing Mobile from us")


}
//showAlert()

//Question # 3

function remove(){
    
    document.getElementById("myTable").deleteRow(2)  
    document.getElementById("myTable").deleteRow(3)
    document.getElementById("myTable").deleteRow(4)
    document.getElementById("myTable").deleteRow(5)
    document.getElementById("myTable").deleteRow(6)
    document.getElementById("myTable").deleteRow(7)  
}
//Question # 4

function bigImg(x){

    x.style.height = "564px";
    x.style.width = "564px";
}
function normalImg(x){

    x.style.height = "132px";
    x.style.width = "132px";
}

//Question # 5

let btnAdd = document.querySelector("#add");
let btnsubtract = document.querySelector("#subtract");
let input = document.querySelector("input");

btnAdd.addEventListener('click', () => {
input.value=parseInt(input.value) + 1;
});

btnsubtract.addEventListener('click', () => {
    input.value=parseInt(input.value) - 1;
});

