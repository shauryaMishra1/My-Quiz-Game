var canva,GameState=0,contestantcount,allcontestants,answer,question,contestant,quiz,database;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database()
  quiz=new Quiz()
  quiz.getState()
  quiz.start()
}


function draw(){
  background("pink");
if(contestantcount==4){
quiz.update(1)
}
  if(GameState==1){
    clear()
    quiz.play()
  }
}
