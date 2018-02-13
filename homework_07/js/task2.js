let max = 5, min = 0, att = 3, total = 0, prizes = 10, maxPrize = 10;

if(confirm("Do you want to play a game?")){
    while(true){
        let rand = Math.floor(Math.random() * (max + 1));
        let num = prompt("Enter a number from " + min + " до " + max + "\n" + "Attemts left: " + (att) + "\n" + "Total prize: " + total + "$\n" + "Possible prize in current attempt: " + prizes + "$");
        if(Number(num) === rand && !isNaN(parseFloat(num))){
            total += prizes;
            att = 3;
            console.log('You win Your prizes '+ total + '$')

            if(confirm("Do you want to play a game?")){ 
                maxPrize *= 3;
                prizes = maxPrize;
                max *=2;
            }else{ //if lost, then the player has the opportunity to play again
                console.log('Thank you for a game. Your prize is: ' + total + '$');
                if(confirm('Do you want try again?')){
                     min = 0;
                     max = 5;
                     att = 3;
                     total = 0;
                     prizes = 10;
                     maxPrize = 10;
                }else{
                    break;
                }
            }
        }else{
            att--;
            prizes = Math.floor(prizes / 2);
            
            if(att == 0){
                console.log('Thank you for a game. Your prize is: ' + total + '$');
                if(confirm('Do you want try again?')){
                     min = 0;
                     max = 5;
                     att= 3;
                     total = 0;
                     prizes = 10;
                     maxPrize = 10;
                }else{
                    break;
                }
            }
        }
    }
}else{ 
    console.log('You did not become a millionaire'); 
}