class Contestant{
    constructor(){
        this.index=null
        this.answer=0
        this.name=null
    }
getCount(){
    var contestantcountref=database.ref('contestantcount')
    contestantcountref.on("value",(data)=>{
        contestantcount=data.val() 
    })
}
updateCount(count){
    database.ref('/').update({
        contestantcount:count
    })
}
update(){
    var contestantindex="contestants/contestant"+this.index
    database.ref(contestantindex).set({
        name:this.name,answer:this.answer
    })
}
static getPlayerinfo(){
    var contestantinforef=database.ref('contestants')
    contestantinforef.on("value",(data)=>{
        allcontestants=data.val()
    })
}
}