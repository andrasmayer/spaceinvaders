isFireing = false //Ne legyen végtelen ciklus
window.addEventListener("keyup",(e)=>{
    player.style["background-image"]  = null
    player.style["background-size"]   = null
    player.style["background-position-x"] = null
    player.style["background-position-y"] = null
    player.classList.remove("player")

    if( [37,65].includes(e.keyCode)  && playerLocation-1 >= firstZone){
        playerLocation--
    }
    else if( [39,68].includes(e.keyCode) && playerLocation+1 <= lastZone){
        playerLocation++
    } 
    
    else if( [38,87].includes(e.keyCode) && (playerLocation - playfieldWidth) >=0){
      //Fel
        playerLocation -= playfieldWidth
    }
    else if( [40,83].includes(e.keyCode) && (playerLocation + playfieldWidth) < lastZone){
        //Le
        playerLocation += playfieldWidth
    }   
    else if(e.keyCode == 32){
        isFireing ===false && playerFire(playerLocation-playfieldWidth)
    }  
    document.getElementById(`zone_${playerLocation}`).classList.add("player")
    playerPosition(`zone_${playerLocation}`)
  //  console.log(e.keyCode )
})

const playerFire = (zone) =>{
    projectileWay = setInterval(() => {
        isFireing = true
        if( document.getElementById(`zone_${zone}`) != null){
            render()
                projectile = document.getElementById(`zone_${zone}`)
                projectile.classList.add("projectile")
                projectile.style.color = `white`
        }else{
            clearInterval(projectileWay)
        }
        if( document.getElementById(`zone_${zone}`) != null && document.getElementById(`zone_${zone}`).style["background-image"] != "" ){
            //Találat
            isFireing = false
            clearInterval(projectileWay)
            rowId = document.getElementById(`zone_${zone}`).parentNode.getAttribute("rowid")
            colId = document.getElementById(`zone_${zone}`).getAttribute("colid")
           
            playfield[rowId][colId] = 0
            render()
            playerScore++
            document.getElementById("playerScore_").value++

            if(playerScore > document.getElementById("highScore_").value){
                document.getElementById("highScore_").value =playerScore
            }
        }
        if(zone < 0){   //Mellé
            isFireing = false
            clearInterval(projectileWay)
            render()
        }
        if(enemiesAlive == 0){  console.log("You won for now") 
        
        curLevel++
        level_build(levels[curLevel])
    }
        zone -= playfieldWidth  
    }, "10");
}