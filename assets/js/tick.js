const timePassing = ()=>{
    const way = Math.random() < 0.5 == false ? "left" : "right"
    const goDown = Math.random() < 0.1
    if(goDown === true){
        for(i=playfield.length-1;i>-1;i--){
            if( playfield[i].includes(1) ){
                playfield[i+1] = playfield[i]
                playfield[i] =[0,0,0,0,0,0,0,0,0,0,0,0,0]
            }
        }
    }
    playfield.forEach((row,key)=>{
        if( row.includes("P")  === false ){
            tmp_l = row[0]
            if(way == "left"){
                row.shift() 
                row.push(tmp_l)
            }
            else if(way == "right"){
                    row.unshift(row[row.length-1] )
                    row.pop()
            }
            isDead(playfield[playerCords.x][playerCords.y] == 1)
        }
    })
    render()
}