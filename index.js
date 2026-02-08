function createTask() {
  var list = document.getElementById("listContent");
  var entry = document.createElement("li");
  entry.appendChild(document.createTextNode("listContent"));
  list.appendChild(entry);
}

function clearList() {
  var list = document.getElementById("listContent");
  if (list.hasChildNodes()) {
    list.removeChild(list.children[0]);
    console.log(list.children.length);
  }
}
