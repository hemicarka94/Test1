
// {
//     let H=10;
//     let taraba= '';
//     for(let i =0; i<=H/2; i++){
//         taraba+= ' '.repeat(H-i)+ '#'. repeat(i) 
//         taraba+= '\n'
//         for()
//     }
//     console.log(taraba);
// }

//
{
    H=10
    let taraba= '';
    for(let i=H; i>0; i--){
        taraba+= ' '.repeat(i)+ '#'.repeat(H-(i-1))+ '#'.repeat(H-i)
        taraba += '\n'
    }
    for(let j=0; j<H; j++){
        taraba+= ' '.repeat(j)+ '#'.repeat(H-(j-1))+ '#'.repeat(H-j)
        taraba += '\n'
    
    }
    console.log(taraba)
}
