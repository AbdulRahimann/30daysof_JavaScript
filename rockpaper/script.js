const choices=["rock","paper","scissor"]
        const playerdisplay=document.getElementById("playerdisplay");
        const computerdisplay=document.getElementById("computerdisplay");
        const resultdisplay=document.getElementById("resultdisplay");
        

        function playgame(playerChoice){
            const computerchoice=choices[Math.floor(Math.random()*3)];

            let result="";
            if(playerChoice === computerchoice){
                result="IT'S A TIE"
            }else{
                switch(playerChoice){   
                    case "rock":
                        result=(computerchoice==="scissor")?"you win":"you lose";
                        break;

                    case "paper":
                        result=(computerchoice==="rock")?"you win":"you lose";
                        break;
                    case "scissor":
                        result=(computerchoice==="paper")?"you win":"you lose";
                        break;
                }
            }
            playerdisplay.textContent=`PLAYER: ${playerChoice}`;
            computerdisplay.textContent=`COMPUTER: ${computerchoice}`;
            resultdisplay.textContent=result;
        }