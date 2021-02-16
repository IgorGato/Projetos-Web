
let result = document.querySelector("#resultado")

function soma1(){result.value+='1'}
function soma2(){result.value+='2'}
function soma3(){result.value+='3'}
function soma4(){result.value+='4'}
function soma5(){result.value+='5'}
function soma6(){result.value+='6'}
function soma7(){result.value+='7'}
function soma8(){result.value+='8'}
function soma9(){result.value+='9'}
function soma0(){result.value+='0'}
function ponto(){result.value+='.'}
function adicao(){result.value+='+'}
function subtracao(){result.value+='-'}
function multiplicacao(){result.value+='*'}
function divisao(){result.value+='/'}
function apagar(){result.value=''}
function resultado(){
    try {result.value=eval(result.value)} 
	catch (error) {result.value ='Insira caracteres válidos'
        setTimeout(function(){ result.value= ''} , 1300)}    
}




