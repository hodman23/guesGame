let winAuddio = new Audio ('win.mp3');
let failAudio = new Audio ('fail.mp3');
let nearFail = new Audio ("nearfail.mp3");
var count = 0;

let secretNumber = Math.trunc(Math.random()*20)+1;
console.log(secretNumber);

 const checkBtn = document.querySelector('.btncheck');


 checkBtn.addEventListener('click', function(){
    count++;

    const guessNumber = Number( document.querySelector('.guess').value)

    


    if (!guessNumber)
    {
        document.querySelector('.message').textContent="⛔ No Number!"
    }
    
 else if  (guessNumber !== secretNumber){
    document.querySelector('.message').textContent = guessNumber > secretNumber ?"🆙Too High":"⬇️Too Low"
    document.querySelector('.guess').value="";
    if (count === 4){
        nearFail.play();
    }
    else if(count === 5){
           failAudio.play();
           checkBtn.disabled = true;
           document.querySelector(".guess").value ="";
          document.querySelector(".number").textContent = secretNumber;
          document.querySelector("body").style.backgroundColor ="red";
          return(document.querySelector(".message").innerHTML="<h4> NO Attempt letf try Again😭</h4>");
          
          
      }
}
else if (count === 5 && guessNumber === secretNumber){
    document.querySelector('.message').textContent ="🎉 Correct Number👏"
    winAuddio.play();
    document.querySelector("body").style.backgroundColor ="green";
    document.querySelector('.number').textContent= secretNumber;
    checkBtn.disabled =true;
    checkBtn.style.backgroundColor ="rgb(246,241, 241,0.202)";
    
}
else if (guessNumber === secretNumber){
    document.querySelector('.message').textContent ="🎉 Correct Number👏"
    winAuddio.play();
    document.querySelector("body").style.backgroundColor ="green";
    document.querySelector('.number').textContent= secretNumber;
    checkBtn.disabled =true;
    checkBtn.style.backgroundColor ="rgb(246,241, 241,0.202)";
    
}

 });
 const againkbtn = document.querySelector('.btnagain');
    againkbtn.addEventListener('click',function(){
        count==0;
        document.querySelector(".number").textContent = "?";
        checkBtn.disabled = false;
        document.querySelector("body").style.backgroundColor = ('#d6eaf7');
        document.querySelector(".message").textContent ="Start guessing..."
        document.querySelector(".guess").value ="";


    })



