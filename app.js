

//DOM SELECTION
let btn = document.querySelector("#add");
let team = document.querySelector(".team");
let input = document.querySelector("input");
let button = document.querySelector("button");






//FUNCTIONS
function  addMember() {
    let developr = prompt("Enter your team member name");
    let div = document.createElement("div");
    let txt = document.createTextNode(developr);
    div.appendChild(txt);
    team.appendChild(div);

}






//EVENT HANDLER
btn.onclick = addMember;
button.onclick = function (event) {
    event.preventDefault();
    console.log(input.value);
    // console.log(event);

};