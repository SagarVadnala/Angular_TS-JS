let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container"); //class
let msg = document.querySelector("#msg");
let turnO =true; //playerx, playerY

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",  () => {
            console.log("Box clicked");
            box.innerText = "ABCD";
            if(turnO){
                box.innerText = "O"
                turnO = false;
            } else {
                box.innerText = "X"
                turnO = true;
            }
            box.disabled = true;

            checkWinner();
    });
});
 
const showWiner = (winner) => {
    msg.innerText = `Congatulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const resetGame = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
        msgContainer.classList.add("hide");
    }
}

const checkWinner  = () => {
    for( let parten of winPatterns){
        //console.log(boxes[parten[0]],boxes[parten[0]],boxes[parten[0]]);

        let pos1val = boxes[parten[0]].innerText;
        let pos2val = boxes[parten[1]].innerText;
        let pos3val = boxes[parten[2]].innerText;
        if(pos1val != "" && pos1val != "" && pos1val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
               console.log("Winner",pos1val);
               showWiner();
               
            }
        }
    }
}

newGameBtn.addEventListener("click" , resetGame );

resetbtn.addEventListener("click" , resetGame );
