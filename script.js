const player = document.getElementById("player");

let x = 300;
let y = 300;

document.addEventListener("keydown", (e) => {

  if(e.key === "w") y -= 10;
  if(e.key === "s") y += 10;
  if(e.key === "a") x -= 10;
  if(e.key === "d") x += 10;

  player.style.left = x + "px";
  player.style.top = y + "px";

});

function makeChoice(choice){

  if(choice === "obey"){
    alert("You obeyed the orders.");
  }

  if(choice === "refuse"){
    alert("You refused the orders. Stress increased.");
    document.querySelector(".stress").style.width = "80%";
  }

}