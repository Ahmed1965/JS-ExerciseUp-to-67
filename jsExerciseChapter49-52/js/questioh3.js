let sRecord = [
    { Name: "Ali Khan", Class: 10,},
    { Name: "Ali Arman", Class: 9,},
    { Name: "Khawer Khan", Class: 7,},
    { Name: "Jameel Khan", Class: 5,},
    { Name: "Adeel A Khan", Class: 8,}
];
  console.log(sRecord)
  
function generateTableHead(table) {
    let tHead = table.createTHead();
    let row = tHead.insertRow();
    for (let key of data) {
        
        let th = document.createElement("th");
        let txt = document.createTextNode(key);
        th.appendChild(txt);
        row.appendChild(th);
    }
    

}
let table = document.querySelector("table");
let data = Object.keys(sRecord[0]);
generateTableHead(table,data)


function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow()
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(Element[key])
            cell.appendChild(text);

        }
            
            
        
    }
}
generateTable(table, sRecord);