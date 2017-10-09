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
    [1,2,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,2,1],
    [1,1,1,2,1,1,1,1,2,1,2,1,1,1,1,2,1,1,1],
    [1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1],
    [1,1,1,2,1,1,1,1,2,1,2,1,1,1,1,2,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,2,1,2,1,1,2,1,1,2,1,2,1,1,2,1],
    [1,2,2,2,2,1,2,2,2,4,2,2,2,1,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ];
  var pacman={
    x: 9,
    y: 10,
  };
  var score=0;
    function drawWorld(){
      document.getElementById("world").innerHTML="";
      for (var i=0;i<map.length;i++){
        for (var j=0;j<map[i].length;j++){
          //console.log(map[i][j]);
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

    document.onkeydown=function(e){
      console.log(e.keyCode);
      if (e.keyCode===37){
        //left
      if (map[pacman.y][pacman.x-1]!==1){ 
        score_up(-1);
        move(-1);        
      }

      }

      else if (e.keyCode===38){
        //up
      if (map[pacman.y-1][pacman.x]!==1){
        score_up(0,-1);
        move(0,-1);        
      }

      }

      else if (e.keyCode===39){
        //right
      if (map[pacman.y][pacman.x+1]!==1){
        score_up(1);  
        move(1);             
      }

      }
      else if (e.keyCode===40){
        //down
      if (map[pacman.y+1][pacman.x]!==1){
        score_up(0,+1);
        move(0,1);
      }

      }
      drawWorld();
    };
    drawWorld();

});