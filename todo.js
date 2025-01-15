
function addnew(){
    var input=document.createElement("input");
    var checkbox=document.createElement("input");
    var container = document.createElement("div");
    checkbox.type="checkbox";
    container.style.display = "flex";
    
container.style.alignItems = "center";
container.style.gap="100px";

container.appendChild(input);
container.appendChild(checkbox);
doboz.appendChild(container);
    
}
