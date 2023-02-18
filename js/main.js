//1=<div class="wall"></div>
  //2=<div class="coin"></div>
  //3=<div class="ground"></div>
  //4=<div class="pacman"></div>
  //5=<div class="ghost"></div>
  const gameMappings = {
    0: "wall",
    1: "coin",
    2: "ground",
    4: "pacman",
    5: "ghost"
  }
  const map=[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,1,2,2,1,2,2,5,2,2,1,2,2,1,2,2,1],
    [1,2,1,1,2,1,1,2,1,2,1,2,1,1,2,1,1,2,1],
    [1,2,2,2,2,1,2,2,2,5,2,2,2,1,2,2,2,2,1],
    [1,1,1,2,1,1,1,1,2,1,2,1,1,1,1,2,1,1,1],
    [1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1],
    [1,1,1,2,1,1,1,1,2,1,2,1,1,1,1,2,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,2,1,2,1,1,2,1,1,2,1,2,1,1,2,1],
    [1,2,2,2,2,1,2,2,2,4,2,2,2,1,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ];
  //up is v-1,h
  //down is v+1,h
  //left is v, h-1
  //right is v, h+1
  let pacman={
    v: 9,
    h: 9,
  },
  ghost_one={
    v:9,
    h:3
  },
  ghost_two={
    v:9, 
    h:1
  },
  score=0,
  gameover=false;

  const drawWorld = function(){
      let world = document.getElementById("world");
      world.innerHTML="";
      for (let i=0;i<map.length;i++){
        for (let j=0;j<map[i].length;j++){
          let block=map[i][j];
          if (block===1){
            world.innerHTML+="<div class='wall'></div>";
          }
          else if (block===2){
            world.innerHTML+="<div class='coin'></div>";
          }
          else if (block===3){
            world.innerHTML+="<div class='ground'></div>";
          }
          else if (block===4){
            world.innerHTML+="<div class='pacman'></div>";
          }
          else if (block===5){
           world.innerHTML+="<div class='ghost'></div>";
          }
        }
          world.innerHTML+="<br>";        
      }
    }
    const getSurroundings = (char)=>{
        let up = map[char.v-1][char.h],
            down = map[char.v+1][char.h],
            left = map[char.v][char.h-1],
            right = map[char.v][char.h+1];
    }
    const setPacmanControls = ()=>{
        document.addEventListener("keydown", (e)=>{

        })


    }
    const gameControls = () =>{

    }

    

    const interfaceControls = ()=>{
        const startBtn = document.getElementById("start");
        startBtn.addEventListener("click",()=>{
            gameControls();

        });

    }


    drawWorld();
