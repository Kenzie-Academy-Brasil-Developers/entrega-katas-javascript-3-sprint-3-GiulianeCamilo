const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    // implemente o código do kata 1 aqui
   let resultado = []
    for (let i = 1; i <= 25; i++){
    resultado += i + " "
}
    return resultado
}

console.log(kata1())

function kata2() {
    // implemente o código do kata 2 aqui
    let resultado = [];
    for (let i = 25; i >= 1; i--){
      resultado += i + " "
  }
  return resultado
}
console.log(kata2())

function kata3() {
    // implemente o código do kata 3 aqui
    let resultado = []
    for (let i = -1; i >= -25; i++){
    resultado += i  + " "
}
    return resultado
}
console.log(kata3())


function kata4() {
    // implemente o código do kata 4 aqui
    let resultado = [];
    for(let i = -25; i >= -1; i--){
     resultado += i + " "
    }
    return resultado
}
console.log(kata4()) 

function kata5() {
    // implemente o código do kata 5 aqui
    let resultado = [];
    for(let impares = -25; impares <= 25; impares++){
        if (impares % 2 !=0){
     resultado += impares + " "
        }
    }
    return resultado
}
console.log(kata5())

function kata6() {
    // implemente o código do kata 6 aqui
    let resultado = [];
    for(let i = 0; i <= 100; i++){
        if (i % 3){
     resultado += i + " "
        }
    }
    return resultado
}
console.log(kata6())


function kata7() {
    // implemente o código do kata 7 aqui
    let resultado = [];
    for(let i = 0; i <= 100; i++){
        if (i % 7){
     resultado += i + " "
        }
    }
    return resultado
}
console.log(kata7())


function kata8() {
    // implemente o código do kata 8 aqui
    let resultado = [];
    for(let i = 100; i <= 1; i--){
        if (i % 3 && i % 7){
     resultado += i + " "
        }
    }
    return resultado
}
console.log(kata8())


function kata9() {
    // implemente o código do kata 9 aqui
    let resultado = [];
    for(let i = 0; i <= 100; i++){
        if (i % 5 !=0){
     resultado += i + " "
        }
    }
    return resultado
}
console.log(kata9())


function kata10() {
    // implemente o código do kata 10 aqui
    let resultado = [];
    for(let i = 0; i < sampleArray.length; i++){
       resultado += sampleArray[i] + " "
    
    }
    return resultado
}
console.log(kata10())


function kata11() {
    // implemente o código do kata 11 aqui
    let resultado = [];
    for(let i = 0; i < sampleArray.length; i++){
        if (i % 2)
        resultado += sampleArray[i] + " "
    
    }
    return resultado
}
console.log(kata11())


function kata12() {
    // implemente o código do kata 12 aqui
    let resultado = [];
    for(let i = 0; i < sampleArray.length; i++){
        if (i % 2 !=0)
        resultado += sampleArray[i] + " "
    
    }
    return resultado
}
console.log(kata12())


function kata13() {
    // implemente o código do kata 13 aqui
    let resultado = [];
    for(let i = 0; i < sampleArray.length; i++){
        if (i % 8)
        resultado += sampleArray[i] + " "
    
    }
    return resultado
}
console.log(kata13())

function kata14() {
    // implemente o código do kata 14 aqui
}

function kata15() {
    // implemente o código do kata 15 aqui
    let resultado = 0;
    for(let i = 1; i <= 20; i++){
    resultado += i + " "
}
return resultado
}
console.log(kata15())

function kata16() {
    // implemente o código do kata 16 aqui
    let resultado = 0;
    for(let i = 1; i <= sampleArray.length; i++){
    resultado += sampleArray[i] + " "
}
return resultado
}
console.log(kata16())


function kata17() {
    // implemente o código do kata 17 aqui
    let resultado = [];
    for(let i = 1; i <= sampleArray.length-1; i++){
    resultado += sampleArray[i] + " "
}
return resultado
}
console.log(kata17())


function kata18() {
    // implemente o código do kata 18 aqui
    let resultado = [];
    for(let i = 1; i <= sampleArray.length+1; i++){
    resultado += sampleArray[i] + " "
}
return resultado
}
console.log(kata18())


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
