let gameSeq=[];
let userSeq=[];
let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
   if( started == false){
     console.log(" game started");
     started = true;
     levelUp();
   }
})
 
 function gameFlash(btn)
 {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
 }
function levelUp(){
  userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    // random button choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameFlash(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
} 

function userFlash(btn)
 {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);
 }

 function checkAns (idx){
  // console.log("current level =", level);
 
  if(userSeq[idx]===gameSeq[idx])
    {
      if(userSeq.length == gameSeq.length)
      {
       setTimeout(levelUp,1000)
      }
    }
  else {
    h2.innerText = " game over ! Press any key to start";
    reset();
  }

 }

function btnPress()
{
  let btn = this;
  // console.log(this);
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userColor);
  
  checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns)
{
  btn.addEventListener("click",btnPress);
}

function reset()
{
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}