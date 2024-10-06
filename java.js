
let comsore = 0;
let usersore = 0;
const choies = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
let u_score_msg = document.querySelector(".user_score_msg");
let c_score_msg = document.querySelector(".com_score_msg");
let user_choice = document.querySelector(".user_choi");
let com_choice = document.querySelector(".com_choi");

const gencomchoice = () =>{
    let arr = ["rock" , "paper" , "scissor"];
    let randno = Math.floor(Math.random() * 3);
    return arr[randno];
}
let gameres = (userwinn) =>{
    if(userwinn){
        msg.innerText = " *** you are winnn ***";
        u_score_msg.innerText ++;


    }else{
        msg.innerText = "you are lost";
        c_score_msg.innerText ++;
    }
}

let playgame = (userch) =>{
    console.log(userch);
    user_choice.innerText = userch;
    //computer choice
    let comchoice = gencomchoice();
    console.log(comchoice);
    com_choice.innerText = comchoice;
    if(userch === comchoice){
        msg.innerText = "gmae was draw so try again";
}
else{
    let userwinn = true;
    if(userch === "rock"){
       userwinn = comchoice === "paper" ? false : true;
    }else if(userch === "paper"){
       userwinn =  comchoice === "scissor" ? false : true;
    }else{
       userwinn =  comchoice === "rock" ? false : true;
    }
    gameres(userwinn);

}

};
choies.forEach((choice) =>{
    choice.addEventListener('click', () =>{
        let userch = choice.getAttribute("id");
        playgame(userch);
        
    })
});
