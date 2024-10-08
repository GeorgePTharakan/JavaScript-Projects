// let a=12;
// document.getElementById(`myh1`).textContent=a;

// console.log(`you are`)
// let username;
// document.getElementById("mysubmit").onclick = function(){
//     username = document.getElementById("mytext").value;
//     document.getElementById("myh1").textContent=`welcome ${username} `;
// }

// let pi=3;
// let r,c;
// r=window.alert("enter radius");
// r=Number(r);
// console.log(2*pi*r)



//COUNTER:


// const dec=document.getElementById("dec");
// const res=document.getElementById("res");
// const inc=document.getElementById("inc");
// const countlabel=document.getElementById("countlabel");
// let count=0;
// dec.onclick=function(){
//     count--;
//     countlabel.textContent=count;
// }
// inc.onclick=function(){
//     count++;
//     countlabel.textContent=count;
// }
// res.onclick=function(){
//     count=0;
//     countlabel.textContent=count;
// }


//RANDOM NUMBER GENERATOR

// const button= document.getElementById("myButton");
// const label=document.getElementById("myLabel");
// const min=1;
// const max=6;
// let value;
// button.onclick=function(){
    
//     value= Math.floor(Math.random()*max) +min;
//     label.textContent=value;
// }
  

//NUMBER GUESSING GAME   


// const min=1;
// const max=100;
// let attempts=0;
// let guess;
// const answer= Math.floor(Math.random()*(max-min+1))+min;
// console.log(answer);
// let running=true;
// while(running){

//     guess = window.prompt(`enter a number between${min} and ${max}`);
//     guess=Number(guess);
//     if(isNaN(guess))
//     {
//         window.alert("please enter a valid number");
//     }
//     else if(guess<min || guess>max)
//     {
//         window.alert("please enter a valid number btw the specified range;")
//     }
//     else {
//         attempts++;

//         if(guess<answer)
//             {
                
//                 window.alert("too low .try again");
//             }
//             else if(guess>answer)
//             {
                
//                 window.alert("too high.try again");
//             }
//             else{
//                 const a=attempts>5? "mandan":"";
                
                
//                 window.alert(`correct .the  answer was ${answer} .it took you ${attempts} attempts to guess the number ${a}`);
//                 if(attempts>5){
                    
//                 }
//                 running=false;
//             }
            
//     }
    

// }


//TEMPERATURE CONVERSION
// const textBox=document.getElementById("textBox");
// const toFarenheit=document.getElementById("toFarenheit");
// const toCelsius=document.getElementById("toCelsius");
// const result=document.getElementById("result");
// let temp;
// function convert()
// {

//     if(toFarenheit.checked){
//         temp=Number(textBox.value)*9/5+32;
//         result.textContent=`${temp.toFixed(1)}℉`;
//     }
//     else if(toCelsius.checked){
//         temp=(Number(textBox.value)-32)*5/9;
//         result.textContent=`${temp.toFixed(2)} ℃`;
//     }
//     else{
//         result.textContent="Select unit";
//     }
// }


//RANDOM PASSWORD GENERATOR

// function generatePassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
//     const lowerCase="abcdefghijklmnopqrstuvwxyz";
//     const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numbers="0123456789";
//     const symbols="!@#$%^&*()";

// let allowedChars="";
// let password="";
// allowedChars+=includeLowerCase?lowerCase:"";
// allowedChars+=includeUpperCase?upperCase:"";
// allowedChars+=includeNumbers?numbers:"";
// allowedChars+=includeSymbols?symbols:"";
// if(length<=0){
//     return ("password must be atleast 1 char long");
// }
// if(allowedChars.length===0){
//     return ("should allow atleast one set");
// }
// for(let i=0;i<length;i++){
//     password+=allowedChars[Math.floor(Math.random()*allowedChars.length)];
// }
// return password;

// }
// length=12;
// includeLowerCase=true;
// includeNumbers=true;
// includeUpperCase=true;
// includeSymbols=true;

// let password=generatePassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);
// console.log(password);

// INTEREST CALCULATOR

// function calculate(){
//     const totalAmount = document.getElementById("total-amount");
//     const principalInput = document.getElementById("principal");
//     const rateInput = document.getElementById("rate");
//     const yearsInput = document.getElementById("years");

//     let principal = Number(principalInput.value);
//     let rate = Number(rateInput.value / 100);
//     let years = Number(yearsInput.value);

//     if(principal < 0 || isNaN(principal)){
//         principal = 0;
//         principalInput.value = 0;
//     }
//     if(rate < 0 || isNaN(rate)){
//         rate = 0;
//         rateInput.value = 0;
//     }
//     if(years < 0 || isNaN(years)){
//         years = 0;
//         yearsInput.value = 0;
//     }

//     const result = principal * Math.pow((1 + rate / 1), 1 * years)

//     totalAmount.textContent = result.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// }

// CLOCK

// function updateClock(){
//     const clock=new Date();
//     const hours=clock.getHours().toString().padStart(2,0);
//     const mins=clock.getMinutes().toString().padStart(2,0);
//     const sec=clock.getSeconds().toString().padStart(2,0);
//     document.getElementById("clock").textContent=`${hours}:${mins}:${sec}`;

// }
// setInterval(updateClock,1000);
// CALCULATOR

// const display=document.getElementById("display");
// let exp="";
// function appendDisplay(char){
    
//     display.value+=char;
// }
// function clearDisplay(){
//     display.value="";
// }
// function calculate(){
//     try{
//         display.value=eval(display.value);
//     }
//     catch(error)
//     {
//         display.value="Error";
//     }
// }

// ROCK PAPER SCISSORS

// const choices =['rock','paper','scissors'];
// const player=document.getElementById("playerDisplay");
// const comp=document.getElementById("computerDisplay");
// const res=document.getElementById("resultDisplay");
// const playerScore=document.getElementById("playerScoreDisplay");
// const computerScore=document.getElementById("computerScoreDisplay");
// let plScore=0;
// let compScore=0;

// function playGame(choice){
//     player.textContent="PLAYER:";
//     comp.textContent="COMPUTER:";
//     res.textContent="";
//    let compChoice=choices[Math.round(Math.random()*2)];
//       console.log(compChoice);
//     switch(choice){
//         case 'rock':player.textContent+='👊';
//                     break;
//         case 'paper':player.textContent+='✋';
//                     break;
//         case 'scissors':player.textContent+='✌';
//                     break;
//     }
//     switch(compChoice){
//         case 'rock':comp.textContent+='👊';
//                     break;
//         case 'paper':comp.textContent+='✋';
//                     break;
//         case 'scissors':comp.textContent+='✌';
//                     break;
//     }
//     if(choice===compChoice){
//         res.textContent+="It's a tie";
//     }
//     else if(choice==='rock'){
//         if(compChoice==='paper'){
//         res.textContent+="computer won";
//         }
//         else if(compChoice==='scissors'){
//         res.textContent+="you won";
//         }
//     }
//     else if(choice==='paper'){
//         if(compChoice==='rock'){
//         res.textContent+="you won";
//         }
//         else if(compChoice==='scissors'){
//         res.textContent+="computer won";
//         }
//     }
//     else if(choice==='scissors'){
//         if(compChoice==='rock'){
//         res.textContent+="computer won";
//         }
//         else if(compChoice==='paper'){
//         res.textContent+="you won";
//         }
//     }
//     if(res.textContent.includes("you won")){
//         plScore++;
//     }
//     else if(res.textContent.includes("computer won")){
//         compScore++;
//     }

//     playerScore.textContent=plScore;
//     computerScore.textContent=compScore;
    
    
 
// } 

// SLIDER

slides=document.querySelectorAll("img");
// let slideIndex=0;
// let intervalId=null;
// // console.log(slides);
// document.addEventListener("DOMContentLoaded",initializeSlider);
// function initializeSlider(){
//     slides[slideIndex].classList.add("displaySlide");
//     intervalId=setInterval(nextSlide,5000);
// }
// function showSlide(index){

// }