function genDiceRolls(){
    var player1 = 1, player2 = 2;
    player1 = Math.floor(Math.random()*6)+1;
    player2 = Math.floor(Math.random()*6)+1;  
    console.log(player1 + " " +player2); 
    document.querySelector("img.img1").setAttribute("src","images/dice"+player1+".png");
    document.querySelector("img.img2").setAttribute("src","images/dice"+player2+".png");
    if(player1 > player2 ){
        document.querySelector("h1").innerHTML = "Player 1 Wins ";
    } else if(player1 === player2 ){
        document.querySelector("h1").innerHTML = "  Draw ";
    } else {
        document.querySelector("h1").innerHTML = " Player 2 Wins ";
    }
}