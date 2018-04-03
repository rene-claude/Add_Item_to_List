var newItemCounter=1 ;
var ourList = document.getElementById("our_list");
var ourButton = document.getElementById("our_button");
var ourHeadline = document.getElementById("our_headline");

//var header = document.getElementbyID("our-headline");
var listItems = document.getElementById("our_list").getElementsByTagName("li");

for (i = 0; i < listItems.length; i++){
  //listitems[i].innerHTML = "Hello World.";
  listItems[i].addEventListener("click", activateItem);
}

function activateItem(){
    //alert("Click detected!");
      ourHeadline.innerHTML = this.innerHTML;
    //alert("Click detected!");
}

ourButton.addEventListener("click", addNewItem);

function addNewItem(){
    ourList.innerHTML += "<li>Something New " + newItemCounter + "</li>";
    newItemCounter++;
}
for (i = 0; i < listItems.length; i++){
  //listitems[i].innerHTML = "Hello World.";
  listItems[i].addEventListener("click", activateItem);
}