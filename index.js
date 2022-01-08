console.log("Calculator!!");

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = "";

for(let item of buttons){
    item.addEventListener('click',(e)=>{
        // let buttonText = e.target.innerText;
        let buttonText = e.target.innerText;
        if(buttonText === "del"){
           buttonText = "";
        }
        else{
            buttonText = e.target.innerText;
        }
        // buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText === "X"){
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText === "C"){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText === "del"){
            screenValue -= buttonText;
            screen.value = screenValue;
        }
        else if(buttonText === "="){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
};



