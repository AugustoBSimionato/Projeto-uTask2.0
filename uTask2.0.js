/*Parte de adicionar e remover item da lista*/
var ul = document.getElementById("myList");
var ul2 = document.getElementById("myList2");
var ul3 = document.getElementById("myList3");
var li;
var itemId;

var moveTasks;
var checkTasks;
var returnTasks;

/*Adicionar Task*/
addTask = function() {
  if(document.getElementById("task").value != "") {
    item = document.getElementById("task");
    itemId = ul.childElementCount;
    li = createItemEl(item.value,itemId);
    li.appendChild(createRemoveTaskBtn(itemId));
    li.appendChild(createMoveTaskBtn(itemId));
    ul.appendChild(li);
    item.value = "";
  }
}

createItemEl = function(itemValue, itemId) {
  let li = document.createElement("li");
  li.setAttribute("index", itemId);
  li.appendChild(document.createTextNode(itemValue));
  return li;
}

/*Remover e mover button*/
removeTask = function(itemId) {
  for (i=0;i<ul.children.length;i++) {
    if (ul.children[i].getAttribute("index") == itemId) {
      ul.children[i].remove();
    }
  }

  for (i=0;i<ul2.children.length;i++) {
    if (ul2.children[i].getAttribute("index") == itemId) {
      ul2.children[i].remove();
    }
  }

  for (i=0;i<ul3.children.length;i++) {
    if (ul3.children[i].getAttribute("index") == itemId) {
      ul3.children[i].remove();
    }
  }
}

createRemoveTaskBtn = function(itemId) {
  let btn = document.createElement("button");
  btn.setAttribute("onclick", "removeTask("+itemId+")");
  btn.classList.add("removebutton");
  btn.innerHTML = "―";
  return btn;
}

moveTask = function(itemId) {
  li.appendChild(createCheckTaskBtn(itemId));
  moveTasks = task.querySelector("item");
  ul2.appendChild(li);
}

createMoveTaskBtn = function(itemId) {
  let btn = document.createElement("button");
  btn.setAttribute("onclick", "moveTask("+itemId+")");
  btn.classList.add("movebutton");
  btn.innerHTML = "🠚";
  return btn;
}

/*Parte do check mark button*/

checkTask = function(itemId) {
  li.appendChild(createReturnTaskBtn(itemId));
  checkTasks = task.querySelector("item");
  ul3.appendChild(li);
}

createCheckTaskBtn = function(itemId) {
  let btn = document.createElement("button");
  btn.setAttribute("onclick", "checkTask("+itemId+")");
  btn.classList.add("checkbutton");
  btn.innerHTML = "✓";
  return btn;
}

/*Parte do return button*/

returnTask = function() {
  returnTasks = task.querySelector("item");
  ul.appendChild(li);
}

createReturnTaskBtn = function(itemId) {
  let btn = document.createElement("button");
  btn.setAttribute("onclick", "returnTask("+itemId+")");
  btn.classList.add("returnbutton");
  btn.innerHTML = "⟲";
  return btn;
}

/*Parte do modal*/
var modal = document.getElementById("myModal");
var btn = document.getElementById("engrenagem");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*Dark Mode*/
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

/*Barra de cookies*/
(() => {
  if (!localStorage.pureJavaScriptCookies) {
    document.querySelector(".box-cookies").classList.remove('hide');
  }
  
  const acceptCookies = () => {
    document.querySelector(".box-cookies").classList.add('hide');
    localStorage.setItem("pureJavaScriptCookies", "accept");
  };
  
  const btnCookies = document.querySelector(".btn-cookies");
  
  btnCookies.addEventListener('click', acceptCookies);
})();