const render = ()=>{
    enemiesAlive = 0
    screen.innerHTML = "";
    let counter = 0
    playfield.forEach((row,key)=>{
        screen.innerHTML += `<div class="row" rowid="${key}"></div>`
        row.forEach((itm,key2)=>{
            currentRow = document.querySelectorAll(".row")[key]
            currentRow.innerHTML += `<div class="zone" id="zone_${counter}" colid="${key2}" data="${itm}">&nbsp</div>`
            currentZone = document.querySelectorAll(".zone")[counter]
            if(itm == 1){
                enemiesAlive++
                currentZone.style["background-image"] = `url("assets/img/enemies.png")`
                currentZone.style["background-size"] = "600px 400px"
                currentZone.style["background-position-x"] = "0px"
                currentZone.style["background-position-y"] = "0px"
           }
           counter++
        })       
    })

    const rows_ = document.querySelectorAll(".row")
    const lastRow = rows_[rows_.length-1]

    if(typeof playerLocation == "undefined"){
        playerLocation = lastRow.querySelectorAll(".zone")[Math.floor(playfieldWidth/2)].getAttribute("id").split("zone_").join("")  
        startLocation = playerLocation
    }
    playerPosition(`zone_${playerLocation}`)
}