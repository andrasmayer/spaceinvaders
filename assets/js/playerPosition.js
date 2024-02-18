const playerPosition = (zone) =>{
    player = document.getElementById(zone)
    playerRow = player.parentNode.querySelectorAll(".zone")
    firstZone = playerRow[0].getAttribute("id").split("zone_").join("")

    playerCords ={x:playerRow[0].parentNode.getAttribute("rowid"), y: player.getAttribute("colid") }
    isDead(playfield[playerCords.x][playerCords.y] == 1)

    Zones = document.querySelectorAll(".zone")
    lastZone = Zones[Zones.length-1].getAttribute("id").split("zone_").join("")

    player.classList.add("player")
    player.style["background-image"] = `url("assets/img/player.png")`
    player.style["background-size"] = "cover"
    player.style["background-position-x"] = "0px"
    player.style["background-position-y"] = "0px"
    playerLocation = parseInt(player.getAttribute("id").split("zone_").join(""))
}