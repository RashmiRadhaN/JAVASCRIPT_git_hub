h//Gobal Variable

var row =null

function Submit(){
    var dataEntered = retrieveData();
    // console.log(dataEntered);
    let readData = readingDataFromLocalStorageData(dataEntered)
    // console.log(readData);
    if(dataEntered ==false){
        msg.innerHTML = `<h3 style="color:red">Please Enter all the fields</h3>`
    }
    else{
        if(row == null){
            insert(readData)
            msg.innerHTML = `<h2 style="color:green"> Data is Inserted"</h2>`
        }
        else{
            update()
            msg.innerHTML = `<h2 style="color:yellow">"Data is updated"</h2>`
        }
    }
    document.getElementById("form").reset()
    

}

//READ THE DATA
// Retrieve Data from From:
function retrieveData(){
    let name1 = document.querySelector("#name").value
    let job1 = document.querySelector("#job").value
    let exp1 = document.querySelector("#exp").value

    let arr =[name1,job1,exp1]
    if(arr.includes("")){
        return false;
    }
    else{
        return arr;
    }

}
// data in localStorage
function readingDataFromLocalStorageData(dataEntered){

    //storing the data in local Storage

    var n = localStorage.setItem("name", dataEntered[0])
    var j = localStorage.setItem("job",dataEntered[1])
    var e = localStorage.setItem("expre",dataEntered[2])


// getting values from localStrage

var n1 = localStorage.getItem("name", n)
var j1 = localStorage.getItem("job", j)
var e1 = localStorage.getItem("expre", e)

var arr =[n1,j1,e1]
return arr


}

 //INSERT THE VALUE TO THE TABLE

 function insert(readData){
    var tab = document.querySelector("#table")
    var row = tab.insertRow() 

    // var cell1 = row.insertCell(0)
    // var cell2 = row.insertCell(1)
    // var cell3 = row.insertCell(2) 
    
    
    // cell1.innerHTML= readData[0]
    // cell2.innerHTML= readData[1]
    // cell3.innerHTML= readData[2]

    /// ANOTHER WAY TO INSERT THE DATA IN TAABLE:

    row.insertCell(0).innerHTML = readData[0]
    row.insertCell(1).innerHTML = readData[1]
    row.insertCell(2).innerHTML = readData[2]
    row.insertCell(3).innerHTML = `<button onclick = "edit(this)">EDIT</button> 
    <button onclick = "remove(this)">DELETE</button>`
 }

 //EDIT FUNCTION
//crow--> currentrow
//insertTheCol-->to target the tabel row

function edit(insideTheCol){
    row = insideTheCol.parentElement.parentElement;
    document.querySelector("#name").value = row.cells[0].innerHTML;
    document.querySelector("#job").value =  row.cells[1].innerHTML;
    document.querySelector("#exp").value = row.cells[2].innerHTML;
}


function update(){
    row.cells[0].innerHTML =  document.querySelector("#name").value
    row.cells[1].innerHTML =  document.querySelector("#job").value  
    row.cells[2].innerHTML = document.querySelector("#exp").value
    row = null 
}


//DELETE
//rowIndex--->it will return current index
function remove(td){
    var res =confirm("Are you sure to delete the data")
    if(res == true){
        row = td.parentElement.parentElement;
        console.log(row);
        document.querySelector("table").deleteRow(row.rowIndex)
    }
    

       //document.getElementById("table").remove()-->it will delete entrie table
    
}