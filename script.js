let input=document.querySelector('.taskInput');
let btn=document.querySelector('.add');
let cont=document.getElementsByClassName('container');
let table=document.querySelector('.tBody');

function savedata(){
    let tasks=[]
    let rows=table.querySelectorAll('tr')
    rows.forEach((row)=>{
        let task=row.querySelector("td").innerText;
        tasks.push(task);
    })
    localStorage.setItem("tasks",JSON.stringify(tasks))
}
function loadData(){
    let stored=JSON.parse(localStorage.getItem("tasks")) || [];
    stored.forEach((task) =>{
        input.value=task;
        createrow();
    })
    input.value="";
   
}

function createrow(){
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let ed=document.createElement("button");
    ed.innerText="Edit";
    let del=document.createElement("button");
    del.innerText="Delete";
    td1.innerText=input.value;
    td2.append(ed,del)
    tr.append(td1,td2)
    table.append(tr)
    input.value="";
    del.addEventListener("click",() =>{
        tr.remove();
        savedata()

    })
    ed.addEventListener("click",() =>{
        input.value=td1.innerText;
        tr.remove();
        savedata()
    })
}


btn.addEventListener("click",() =>{
    createrow();
    savedata();
})
loadData();
