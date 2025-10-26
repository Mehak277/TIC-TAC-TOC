let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn=document.querySelector('#new-btn')
let msgContainer= document.querySelector(".winner-msg")
let msg=document.querySelector("#msg");
let turnO = true; //playerX,playerO
//2-D array for winning pattern store
let count=0;
const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetgame=()=>{
    turnO=true;
    count=0
    enableBoxes();
    msgContainer.classList.add('hide')

}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
   
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled=true;  //if u click again no change will be reflected
    count++;
    let iswinner=checkWinner();
    if(count===9 && !iswinner){
      noWinner();
    }
  });
});

 const noWinner=()=>{
    msg.innerText=`NO one wins the game! `;
    msgContainer.classList.remove('hide')
    disableboxes()
}
const disableboxes=()=>{
    for (let box of boxes) {
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for (let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner} `;
    msgContainer.classList.remove('hide')
    disableboxes()
}


const checkWinner=()=>{
for(let pattern of winpatterns) {
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            
            // console.log(" winner "+ pos1 );
        
            showWinner(pos1);
             return true;
          
        }
    }
   
}}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

