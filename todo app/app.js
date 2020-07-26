var input= document.getElementById("input");
       var list=document.getElementById("list");
function addBtn(){
    if(input.value==""){
        alert("kindly fill value first");
    }
    else{
        //create li and its textnode button
    var li=document.createElement("li");
    var liText=document.createTextNode(input.value);

    var imgEditBtn=document.createElement("img");
    imgEditBtn.setAttribute("src","add-button.png");
    imgEditBtn.setAttribute("onClick","editItem(this)")
  
    var imgDelBtn=document.createElement("img");
    imgDelBtn.setAttribute("src","main_delete.png")
    imgDelBtn.setAttribute("onClick","delItem(this)")
 
    //take value of textnode inside li
    
    li.appendChild(liText);
    li.appendChild(imgEditBtn);
    li.appendChild(imgDelBtn);

    //take value of li inside ul
    list.appendChild(li);

    input.value="";
    }
}
function editItem(e){
    var edInput=prompt("enter",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue=edInput;
}
function delItem(e){
    e.parentNode.remove();
}
function delBtn(){
    list.innerHTML="";
}