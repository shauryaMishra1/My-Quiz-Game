class Quiz{
    constructor(){

    }
getState(){
    var gameStateref=database.ref('GameState')
    gameStateref.on("value",function(data){
        GameState=data.val()
    })
}
update(state){
    database.ref('/').update({
        GameState:state

    })
}
async start(){
    if(GameState==0){
        contestant=new Contestant()
        var contestantcountref=await database.ref('contestantcount').once("value")
        if(contestantcountref.exists()){
            contestantcount=contestantcountref.val()
                contestant.getCount()
            
        }
question=new Question()
question.display()
        
    }

}
play(){
    question.hide()
    background("yellow")
    fill(0)
    textSize(30)
    text("Result Of Quiz",340,50)
    text("----------------------------",320, 65);
    Contestant.getPlayerinfo()
    if(allcontestants!=undefined){
        debugger
        var displayanswer=230
        fill("blue")
        textSize(20)
        text("not:contestants answered correctly are highlighted in green colout",130,230)
        for(var plr in allcontestants){
            debugger
            var correctanswer="2"
            if(correctanswer==allcontestants[plr].answer)
            fill("green")
            else{
                fill("red")
            }displayanswer+=30
            textSize(20)
            text(allcontestants[plr].name+":"+allcontestants[plr].answer,250,displayanswer)
        }
        
    }
}
}