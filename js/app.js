function BookShoop(bookname,bookprice){
    this.bookname=bookname
    this.bookprice=bookprice
    let bookPages=function() {
        min = Math.ceil(1);
        max = Math.floor(500);
        return Math.floor(Math.random() * (max - min) + min); 
      }
   
}
BookShoop.prototype.bookPages=function() {
    min = Math.ceil(1);
    max = Math.floor(500);
    return Math.floor(Math.random() * (max - min) + min); 
  }

let table = document.createElement("table");
let conatiner=document.querySelector('div[class=container]')
let tablecontainer=document.getElementById('tablecontainer')
tablecontainer.appendChild(table)
let resultsction=document.querySelector('section[class=resultsction]')
let form=document.querySelector('form[id=deatils]')
let btnSub=document.querySelector('input[type=submit]')
let tot=document.createElement('h3')




btnSub.addEventListener('click',function(){
    tNewRow()
    grandtotal=0
    total()
    tot.remove()
    tot.textContent='Total :  '+grandtotal
    resultsction.appendChild(tot)
})

form.addEventListener('submit',function(event){
    event.preventDefault();
})



function tHeader(){
    let tr =document.createElement("tr");
    let headerNames=['Book Name','Book pages','price']
    for (let i = 0; i < headerNames.length; i++) {
        let th=document.createElement('th')
        th.textContent=headerNames[i]
        tr.appendChild(th)
    }
    table.appendChild(tr);
}
tHeader()

function tNewRow(){

    let bookName=document.getElementById('bookname').value
    let bookPrice=document.getElementById('bookprice').value    

    if(bookName == '' || bookPrice == ''){
        alert('Please Enter Book deatils')
        return
    }
    if(isNaN(bookPrice)){
        alert("please Enter Just Numbers")
        return
    }
    let book =new BookShoop(bookName,bookPrice)

    let tr=document.createElement("tr");
    let tdName=document.createElement("td");
    tdName.textContent=book.bookname

    let tdPages=document.createElement("td");
    tdPages.textContent=book.bookPages()

    let tdPrice=document.createElement("td");
    tdPrice.textContent=book.bookprice
    
    tr.appendChild(tdName)
    tr.appendChild(tdPages)
    tr.appendChild(tdPrice)

    table.appendChild(tr)
}
let grandtotal=0
function total(){
    for (let i = 0; i < table.rows.length; i++) {
        if(i==0){
            continue
        }
       let row= table.rows[i].cells
       grandtotal+=parseInt(row[2].textContent)
    }
}

