$(document).ready(function(){
  //1=<div class="wall"></div>
  //2=<div class="coin"></div>
  //3=<div class="ground"></div>
  //4=<div class="pacman"></div>
  //5=<div class="ghost"></div>

  var map=[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,1],
    [1,2,1,1,2,1,1,2,1,2,1,2,1,1,2,1,1,2,1],
    [1,2,2,2,2,1,2,2,2,5,2,2,2,1,2,2,2,2,1],
    [1,1,1,2,1,1,1,1,2,1,2,1,1,1,1,2,1,1,1],
    [1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1],
    [1,1,1,2,1,1,1,1,2,1,2,1,1,1,1,2,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,2,1,2,1,1,2,1,1,2,1,2,1,1,2,1],
    [1,2,2,2,2,1,2,2,2,4,2,2,2,1,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ],
  pacman={
    x: 9,
    y: 9,
  },
  ghost={
    x:9,
    y:3
  },
  score=0,
  gameover=false;


  function drawWorld(){
      document.getElementById("world").innerHTML="";
      for (var i=0;i<map.length;i++){
        for (var j=0;j<map[i].length;j++){
          var block=map[i][j];
          if (block===1){
            $("#world").append("<div class='wall'></div>")
          }
          else if (block===2){
            $("#world").append("<div class='coin'></div>")
          }
          else if (block===3){
            $("#world").append("<div class='ground'></div>")
          }
          else if (block===4){
            $("#world").append("<div class='pacman'></div>")
          }
          else if (block===5){
           $("#world").append("<div class='ghost'></div>")
          }
        }
          $("#world").append("<br>")        
      }
    }
    function score_up(change_x,change_y=0){
       if (map[pacman.y+change_y][pacman.x+change_x]==2){
          score+=10;
          $("#scoreboard").html(score);
        }
    }
    function move(change_x,change_y=0){
        map[pacman.y][pacman.x]=3;        
        pacman.x+=change_x;
        pacman.y+=change_y;
        map[pacman.y][pacman.x]=4;
    }

    function getRandomIntInclusive() {
        var min = Math.ceil(0),max = Math.floor(1);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      } 
    function game_over_check(){
      if(ghost.x==pacman.x && ghost.y==pacman.y){
            $("#scoreboard").text("GAME OVER");
            gameover=true;
          }
    }
    function ghost_move(){
      
      var arr=[1,-1],hori_or_vert=getRandomIntInclusive(), direction=arr[getRandomIntInclusive()];

      if (hori_or_vert==0){
        if (map[ghost.y+direction][ghost.x]!==1){        
          map[ghost.y][ghost.x]=3;
          ghost.y+=direction;
          game_over_check();
          map[ghost.y][ghost.x]=5;
        }
      }
      else if (hori_or_vert==1) { 
        if (map[ghost.y][ghost.x+direction]!==1){        
          map[ghost.y][ghost.x]=3;
          ghost.x+=direction;
          game_over_check();
          map[ghost.y][ghost.x]=5;
        }
      }        
     
      }


document.onkeydown=function(e){ 

if (gameover==false){
  
  switch(e.keyCode){
      case 37:
      //left
        if (map[pacman.y][pacman.x-1]!==1){ 
        score_up(-1);
        move(-1);        
        }
      break;

      case 38:
       //up
        if (map[pacman.y-1][pacman.x]!==1){
        score_up(0,-1);
        move(0,-1);        
       }
      break;

      case 39:
        //right
        if (map[pacman.y][pacman.x+1]!==1){
        score_up(1);  
        move(1);             
      }
      break;

      case 40:
        //down
        if (map[pacman.y+1][pacman.x]!==1){
        score_up(0,+1);
        move(0,1);
      }
      break;
    }
  }
}

    setInterval(ghost_move, 300);
    setInterval(drawWorld,300); 
  
});