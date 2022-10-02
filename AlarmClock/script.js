//Program Members 
let alarmMode;
let timer=1500;

let button25, button90, buttonCust;


let sounds = new Tone.Players({
  'Music':'AlarmFiles/AudioFiles/RelaxMusic.mp3',
  'alarm':'AlarmFiles/AudioFiles/alarmSound.mp3',
}).toDestination();

function playSound(whichSound){
  if (whichSound === 'alarmSound' ){
    sounds.player('alarm').start();
  }else if (whichSound === 'Music' ){
    sounds.player('Music').start();
  }
}


function setup() {
  Tone.start();
  //creating and centering canvas
  myCanvas = createCanvas(800, 500);
  myCanvas.position((windowWidth-800)/2,400);
  
  background(175,210,233);

  //mode 1 buttons / sliders
  let button25 = createButton("25 Minutes");
  let button90 = createButton("90 Minutes");
  //let buttonCust = createButton("\n Set Custom Time");
  //let timeSlider = createSlider("Custom Time");


  //button positioning
  button25.position(425,575);
  button90.position(825, 575);
  //buttonCust.position(825,575);

  //Button/slider styling
  button25.size(300,75);
  button90.size(300,75);
  //buttonCust.size(300,75);
  
  button25.style('background-color', '#fcd0a1');
  button25.style('border-radius','3px');
  button25.style('font-size', '27px');

  button90.style('background-color', '#fcd0a1');
  button90.style('border-radius','3px');
  button90.style('font-size', '27px');
  
  //buttonCust.style('background-color', '#fcd0a1');
  //buttonCust.style('border-radius','3px');
  //buttonCust.style('font-size', '20px');

  button25.mousePressed(()=>alarmIterate(3));
  button90.mousePressed(()=>alarmIterate(4));
  //buttonCust.mousePressed(()=>alarmIterate(5));

  alarmMode = 2;
}
//test
//(alarmMode != 3) && (alarmMode != 4) && ( alarmMode != 5)

function draw() {


  if(alarmMode == 2){ //Alarm Control Interface
    textSize(32);
    textAlign(CENTER);
    text("Geaux to Sleep!",400,40);
    
    textSize(20);
    text("How long would you like to nap today?",400,120);

  }
  else if(alarmMode == 3){ // 25 minute
    playSound('Music');
    if(timer == 0){
      playSound('alarm');
      //alarmSOund.start();

    }


    textSize(32);
    
    text("Time Remaining: " + timer, 400,400);
      if (((frameCount % 60) == 0)&& (timer > 0)){
        timer = timer -1;
        clear();
        my1Canvas = createCanvas(800, 500);
        my1Canvas.position((windowWidth-800)/2,400);
        background(175,210,233);

        textSize(32);
        textAlign(CENTER);
        text("Geaux to Sleep!",400,40);
        
        textSize(20);
        text("How long would you like to nap today?",400,120);
      }
    

    


  }
  else if(alarmMode == 4){ // 90 minute 
    
    text("Time Remaining: " + timer, 400,400);
    //musicSound.start();
    playSound('Music');
    if(timer == 0){
      playSound('alarm');
      //alarmSOund.start();

    }

    

    if (((frameCount % 60) == 0)&& (timer > 0)){
      timer = timer -1;
      clear();
      my1Canvas = createCanvas(800, 500);
      my1Canvas.position((windowWidth-800)/2,400);
      background(175,210,233);

      textSize(32);
      textAlign(CENTER);
      text("Geaux to Sleep!",400,40);
      
      textSize(20);
      text("How long would you like to nap today?",400,120);
    }
  }
  else if(alarmMode == 5){ // Custom option
    clear();
  }
   
}


function alarmIterate(modeNum){
    if(modeNum == 3){
      alarmMode = 3;
      //Tone.start();
      }
    else if(modeNum == 4){
      alarmMode = 4;
      timer = 5400;
      //Tone.start();
      }
    else if(modeNum == 5){
      alarmMode = 5;
      //Tone.start();
    }



}

function changeTimer(timeAmount){
  if (timeAmount == 90){
    timer = 5400;

  }
  else{
    timer = timeAmount;
  }

}