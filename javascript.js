let name = "Debbie Giammarco";
let age = 34;
let birthday = "January 20";
let detroitGC = true;
let lifeEvents = [ "I was born in Livonia, Michigan.", 
                   "I went to U of M Dearborn.", 
                   "I got married in 2014.", 
                   "Got my first dog kid Louie in 2018."];


if (detroitGC === true){
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}
else{
     console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}


   for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
  }


let counter =0;
let randomNumber = Math.floor(Math.random() * 10) + 1;
    
while(randomNumber <= 10)
 
{
  if(randomNumber !== 5)
     {
      console.log(`${randomNumber} !== 5 `); 
      counter ++;  
      randomNumber = Math.floor(Math.random() * 10) + 1;
    }
    
  else {
      counter ++;
      console.log(`5===5. It took ${counter} iterations to randomly generate the number 5.`);
      break;
  } 
  
}      
        