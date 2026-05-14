const player = document.getElementById("player");

let x = 400;
let y = 400;

document.addEventListener("keydown", (e)=>{

  if(e.key === "w"){
    y -= 10;
  }

  if(e.key === "s"){
    y += 10;
  }

  if(e.key === "a"){
    x -= 10;
  }

  if(e.key === "d"){
    x += 10;
  }

  player.style.left = x + "px";
  player.style.top = y + "px";

});

function obeyOrder(){

  alert("You followed the orders.");
}

function refuseOrder(){

  alert("Stress increased.");

  document.querySelector(".stress-fill").style.width = "85%";

  document.body.style.filter = "grayscale(20%)";
}