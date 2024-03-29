let choseBox=document.querySelectorAll(".box");
let resetbtn=document.getElementById("button");
let statusCheck=document.querySelectorAll("#status");

let turnO=true;

choseBox.forEach((box)=>{
box.addEventListener("click",()=>{
   
    if(turnO){
        box.innerText="X";
        statusCheck[0].innerText="O's turn";
        turnO=false;
    }
    else{
        box.innerText="O";
        statusCheck[0].innerText="X's turn";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
});
});

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame=()=>{
    win=false;
    turnO=true;
    enableBoxes();
    statusCheck[0].innerText="X's turn";
}

const disableBoxes=()=>{
    for(let i=0;i<=winPatterns.length;i++){
        choseBox[i].disabled=true;
    }
}

const enableBoxes=()=>{
    for(let i=0;i<=winPatterns.length;i++){
        choseBox[i].disabled=false;
        choseBox[i].innerText="";
    }
}

let win=false;

const showWinner=(winner)=>{
    statusCheck[0].innerText=`Congratulations! Winner is ${winner}`;
    resetbtn.innerText="Restart";
    disableBoxes();
    win=true;
}; 

const checkWinner=()=>{
    for(let i=0;i<winPatterns.length;i++){
        const pattern=winPatterns[i];
       let pos1=choseBox[pattern[0]].innerText;
       let pos2=choseBox[pattern[1]].innerText;
       let pos3=choseBox[pattern[2]].innerText;
      
       if(pos1!="" && pos2!="" && pos3!=""){
       if(pos1===pos2 && pos2===pos3){
        showWinner(pos1);
       } 
    }
    }
    let count=0;
    for(let i=0;i<9;i++){
        if(choseBox[i].innerText!="")
        count++;
    }
    if(win===false && count===9){
        statusCheck[0].innerText="Draw";
       }
    
};

resetbtn.addEventListener("click", resetGame);
