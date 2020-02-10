const player = {
    x:1,
    y:1,
    path: [{x:1, y:1}]
  };
  
  function placeHorizontal(thePlayer, command)
  {
    if(thePlayer.y >= 0 && thePlayer.y < 2){
      if(command === "l"){
        thePlayer.y--;
      } else {
        thePlayer.y++;
      }
      console.log(`Player has position: x=${thePlayer.x}, y=${thePlayer.y}`);
  
      let newPosition = {x: thePlayer.x, y: thePlayer.y};
      thePlayer.path.push(newPosition);
  } else {
    console.log("You cant place player outside of the board!");
   }
  }
  
  //for (let i=0; i< player.path.length; i++){
    //console.log(`Path ${i} ==> x=${player.path[i].x}, y=${player.path[i].y}`)
  //}
  
  function placeVertical (thePlayer, command) {
    if(thePlayer.x >= 0 && thePlayer.x < 2){
      if (command === "u"){
        thePlayer.x--;
      } else {
        thePlayer.x++;
      }
      console.log(`The player has position: x=${thePlayer.x}, y=${thePlayer.y}`);
      let newPosition = {x: thePlayer.x, y: thePlayer.y};
      thePlayer.path.push(newPosition);
    } else {
      console.log("Youu cant place player outside of the board!")
    }
  }
  
  function command(thePlayer, orders){
    for (let i = 0; i< orders.length; i++){
      let order = orders[i];
      switch(order){
        case "l":
          placeHorizontal(thePlayer, order);
          break;
        case "r":
          placeHorizontal(thePlayer, order);
          break;
        case "u":
          placeVertical(thePlayer, order);
          break;
        case "d":
          placeVertical(thePlayer, order);
          break;
      }
    }
    console.log(thePlayer.path);
  }
  command(player, "lurrddu");
  