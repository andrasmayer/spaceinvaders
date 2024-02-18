const screen = document.getElementById("screen")
const level_ = document.getElementById("level_")
const life_ = document.getElementById("life_")

let playfield = []

const level_build = (lvl)=>{
    playfield = []
    for(i=0;i<playfieldHeight;i++){
        playfield.push([]);
        for(j=0;j<playfieldWidth;j++){   
            playfield[i].push(0); 
        }
    }
    playfield[playfield.length-1][5] = "P" 
    level_start(lvl)
}

const level_start = (lvl)=>{
    playfield.forEach((itm,key)=>{
        if(lvl[key] != null){ playfield[key] = lvl[key]}
    })
}

const isDead = (isEnemy) =>{
    if(isEnemy === true ){
        life_.value--
        if(life_.value == 0){
        alert("Game over")
        }
        else{
            playfield[playerCords.x][playerCords.y] = 0
            console.log(startLocation)
            playerPosition(`zone_${startLocation}`)
            render()
        }
    }
}

constletsPlay = setInterval(() => {
    timePassing()
}, gameSpeed);



let curLevel = 0
level_build(levels[curLevel])


render()