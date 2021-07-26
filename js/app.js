'use strict';
let userName = prompt ('what is your name ');
alert('nice to meet you '+ userName);

let known = prompt ('Do we know me ?' , 'your answer should be in lowercase');
switch(known.toLowerCase()) {
    case 'yes':
      alert ('So happy to hear that');
     // console.log(known);
      break;
    case 'no':
      alert('I hope we get the opportunity to meet you ');
     // console.log(known);
      break;
    default:
      alert('You didnt answer');
      //console.log(known);
  }

  let programer = prompt ('are you programmer?' , 'your answer should be in lowercase' );
switch(programer.toLowerCase()) {
    case 'yes':
      alert ('So we are  colleagues');
     // console.log(programer);
      break;
    case 'no':
      alert('i hope you will be best programmer in the future');
     // console.log(programer);
      break;
    default:
      alert('You didnt answer ');
      //console.log(programer);
  }
  let fan = prompt ('Do you like football ?', 'your answer should be in UpperCase');
  switch(fan.toUpperCase()) {
      case 'YES':
        alert ('i like it also');
       // console.log(fan);
        break;
      case 'NO':
        alert('you have to watch one match to change your opinion');
       // console.log(fan);
        break;
      default:
        alert('You didnt answer ');
        //console.log(fan);
    }
    let web = prompt ('Do you like my web page ?', 'your answer should be in UpperCase');
    switch(web.toUpperCase()) {
        case 'YES':
          alert ('Thanks you ');
         // console.log(web);
          break;
        case 'NO':
          alert('your comments will help me to do the best');
         // console.log(web);
          break;
        default:
          alert('You didnt answer');
          //console.log(web);
      }
      let stay = prompt ('Do you like to stay in contact ? ', 'your answer should be in UpperCase');
    switch(stay.toUpperCase()) {
        case 'YES':
          alert ('Thanks i am so happy to hear that ');
         // console.log(stay);
          break;
        case 'NO':
          alert('I Respect your decision   :) ');
         // console.log(stay);
          break;
        default:
          alert('You didnt answer');
          //console.log(stay);
      }

      alert('Thanks for your answers  '+ UserName);