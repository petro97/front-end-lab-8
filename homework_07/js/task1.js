let x = Number(prompt('enter a number from 0 to 20', 0));
let result = '';
if(Math.sign(x) >= 0 && Number.isInteger(x) && x <= 20 ){
    for(let i = 0; i < x; i++){
        let a = x - i;           
        for(let b = a; b > 0; b--){
            result += "   ";    
        }
        let c = (i*2)+1;
        for(let d = c; d > 0; d--){
            result += "[~]";    
        }
        result += "\n";
    }
console.log(result);
}else{
     console.error('Incorrect data');
}
    