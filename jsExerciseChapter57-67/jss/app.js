// var x;
// x = document.all;
// x = x[15];
// var y;
// y = document.getElementsByClassName["render"];
// // console.log(x);
// // document.write(x);


function render() {
    var c = document.body.childNodes;
    var txt = " ";
    var i;

    
    for (var i = 0; i < c.length; i++){
        txt = txt + c[i].nodeName + "<br>" 
    }
    document.getElementsByClassName("render2").innerHTML = txt;
    console.log(i)
     
}
//console.log(txt);
//document.getElementsByClassName("content").innerHTML = txt;

