'use strict';
let finalScore = 0;
let userName = prompt ('what is your name ');
alert('nice to meet you '+ userName);

known();
programer();
fan();
web();
stay();
weight();
guess();

function known(){

  let known = prompt ('Do we know me ?' , 'your answer should be in lowercase');
  switch(known.toLowerCase()) {
  case 'yes':
  case 'y':
    alert ('So happy to hear that');
    finalScore++;
    break;
  case 'no':
  case 'n':
    alert('I hope we get the opportunity to meet you ');
    break;
  default:
    alert('You didnt answer');
  }
}
function programer(){
  let programer = prompt ('are you programmer?' , 'your answer should be in lowercase' );
  switch(programer.toLowerCase()) {
  case 'yes':
  case 'y':
    alert ('So we are  colleagues');
    finalScore++;
    break;
  case 'no':
  case 'n':
    alert('i hope you will be best programmer in the future');
    break;
  default:
    alert('You didnt answer ');
  }}
function fan(){
  let fan = prompt ('Do you like football ?', 'your answer should be in UpperCase');
  switch(fan.toUpperCase()) {
  case 'YES':
  case 'Y':
    alert ('i like it also');
    finalScore++;
    break;
  case 'NO':
  case 'N':
    alert('you have to watch one match to change your opinion');
    break;
  default:
    alert('You didnt answer ');
  }}
function web(){
  let web = prompt ('Do you like my web page ?', 'your answer should be in UpperCase');
  switch(web.toUpperCase()) {
  case 'YES':
  case 'Y':
    alert ('Thanks you ');
    finalScore++;
    break;
  case 'NO':
  case 'N':
    alert('your comments will help me to do the best');
    break;
  default:
    alert('You didnt answer');
  }}
function stay(){
  let stay = prompt ('Do you like to stay in contact ? ', 'your answer should be in UpperCase');
  switch(stay.toUpperCase()) {
  case 'YES':
  case 'Y':
    alert ('Thanks i am so happy to hear that ');
    finalScore++;
    break;
  case 'NO':
  case 'N':
    alert('I Respect your decision   :) ');
    break;
  default:
    alert('You didnt answer');
  }}

alert('Thanks for your answers  '+ userName);
function weight(){
  let weight = Number(prompt('How much do you think my weight')) ;
  let i;

  for(i = 0 ; i < 4 ; i++ ){
    if(weight === 70)
    {
      finalScore++;
      alert('Greate You had guessed the right answer its 70');
      break;

    }
    if(weight > 70)
    {
      alert('your answer is to high');
      weight = Number(prompt('How much do you think my weight'));
    }
    else(weight < 70);
    {
      alert('your answer is to low');
      weight = Number(prompt('How much do you think my weight'));
    }
  }

  alert('the correct answer is:70');

}

function guess(){
  let guess = Number(prompt('guess one of three values,my day of birth,last 3 numbers of my cell phone ,my graduation year'));

  let listOfdata = [515 , 2011 , 24 ];
  let n;
  let j;
  lable: for (n = 0 ; n < 6 ; n++){
    for (j = 0 ; j < 3 ; j++ ) {
      if (guess === listOfdata[j]){
        alert('you have insert correct answer');
        finalScore++;
        break lable ;}

    }
    guess = Number(prompt('guess one of three values,my day of birth,last 3 numbers of my cell phone ,my graduation year'));
  }
  alert('my last 3 numbers of my cell phone: ' + listOfdata[0] + ' my graduation year: '+ listOfdata[1] + 'my day of birth: ' + listOfdata[2]);
}
alert('your final score is: ' + finalScore + 'of 7');
