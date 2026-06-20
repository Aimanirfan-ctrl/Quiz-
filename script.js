document.getElementById("btn").onclick = function(){

    let task = document.getElementById("task").value;

    let li = document.createElement("li");

    li.textContent = task;

    document.getElementById("list").appendChild(li);

};