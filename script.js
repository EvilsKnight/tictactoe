

        let btnRef= document.querySelectorAll(".button-option");
        let popupRef = document.querySelector(".popup");
        let newgameBtn = document.getElementById("new-game");
        let restartBtn = document.getElementById("restart");
        let msgRef = document.getElementById("message");
        let turn = document.getElementById("turn");

        let winningPattern = [
            [0,1,2],[0,3,6],[2,5,8],[6,7,8],[3,4,5],[1,4,7],[0,4,8],[2,4,6]
        ];


        let Xturn =true;
        let count = 0;

        const disablebuttons =() => {
            btnRef.forEach((element)=>(element.disabled = true));

            popupRef.classList.remove("hide");
        };

        const enablebuttons =() => {
            btnRef.forEach((element)=>{element.innerText = "";
            element.disabled = false;});

            popupRef.classList.add("hide");
        };

        const winfunction = (letter) => {
            disablebuttons();
            if (letter=="X"){
                msgRef.innerHTML="&#x1F389; <br> 'x' Wins";
                
            }
            else{
                msgRef.innerHTML="&#x1F389; <br> 'O' Wins";
            }
        };

        const drawfunction = () =>{
            disablebuttons();
            msgRef.innerHTML="&#x1F60E; <br> its a draw";
        };

        newgameBtn.addEventListener("click",() =>{
            count=0;
            enablebuttons();
        });
        restartBtn.addEventListener("click",() =>{
            count=0;
            enablebuttons();
            turn.innerHTML="X Turn";
        });

        const winChecker =()=> {
            for(let i of winningPattern){
                let [element1,element2,element3]=[
                    btnRef[i[0]].innerText,
                    btnRef[i[1]].innerText,
                    btnRef[i[2]].innerText,
                ];
                if (element1 != "" && (element2 != "") &(element3 !="")){
                    if (element1 == element2 && element2==element3){
                        winfunction(element1);
                    }
                }
            }
        };

        turn.innerHTML="X Turn";

        btnRef.forEach((element) => {
            element.addEventListener("click",() => {
                    if (Xturn) {
                        Xturn = false;
                        element.innerText = "X";
                        element.disabled = true;
                        turn.innerHTML="O Turn";
                    }
                    else {
                        Xturn = true;
                        element.innerText = "o";
                        element.disabled = true;
                        turn.innerHTML="X Turn";
                    }
                    count += 1;
                    if (count == 9) {
                        drawfunction();
                    }
                    winChecker();
                });
        });

        window.onload=enablebuttons;




    