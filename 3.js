{
    let K=3
    let N=35
    let zbir=0
    let proizvod=1
    if(K>N){
        let tmp= K
        K= N
        N= tmp
    }
    for(i=K; i<=N; i++){
        if(i%3===0){
        zbir+=i
        }
        else if(i%3!==0 && i%7===0){
            proizvod*=i
        }
    }
    console.log("Zbir brojeva izmedju "+ K + " i " + N +" koji su deljivi sa 3 je: " + zbir)
    console.log("proizvod brojeva izmedju "+ K + " i " + N +" koji nisu deljivi sa 3 ali su deljivi sa 7 je: "+ proizvod)
}