{
    let kolicinapica= 9
    let cenapopicu=180 //dinara
    let godine= 21
    let ukupno=cenapopicu* kolicinapica
    let popust15= (ukupno*15)/ 100
    let popust25=(ukupno *25)/100
    if(godine>=18){
        if(godine%7 === 0){
            console.log("Iznos za placanje je: "+ (ukupno-popust15))
        }
        else if(godine%11===0){
            console.log("Iznos za placanje je: "+ (ukupno-popust25))
        }else{
            console.log("Iznos za placanje je: "+ ukupno)
        }
    }
}