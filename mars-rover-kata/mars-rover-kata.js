let marsRover = {
  direction: "N",
  x : 0,
  y : 0,
  travelLog: [{x:0, y:0}]
}

function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
      case "E":
      rover.direction = "N";
        break;
  }
  console.log("turnLeft was called!");
  }

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("turnRight was called!");
  }


function moveForward(rover){
  if (rover.x >= 0 && rover.y >= 0 && rover.x < 10 && rover.y < 10){
  switch(rover.direction) {
    case "N":
      marsRover.y++;
      break;
    case "E":
      marsRover.x++;
      break;
    case "S":
      marsRover.y--;
      break;
    case "W":
      marsRover.x--;
      break;
  }
  } else {
    console.log("You cant place player outside of the board!!!!!");
  }
  console.log("moveForward was called");
  console.log(`Rover has position: x=${rover.x}, y=${rover.y}`);
  let newPosition = {x: rover.x, y: rover.y};
    marsRover.travelLog.push(newPosition);
}

function moveBackward(rover){
  if (rover.x >= 0 && rover.y >= 0 && rover.x < 10 && rover.y < 10){
  switch(rover.direction) {
    case "N":
      marsRover.y--;
      break;
    case "E":
      marsRover.x--;
      break;
    case "S":
      marsRover.y++;
      break;
    case "W":
      marsRover.x++;
      break;
  }
  } else {
    console.log("You cant place player outside of the board!!!!!");
  }
  console.log("moveBackward was called");
  console.log(`Rover has position: x=${rover.x}, y=${rover.y}`);
  let newPosition = {x: rover.x, y: rover.y};
    marsRover.travelLog.push(newPosition);
}


function command(marsRover, orders){
  for (let i = 0; i< orders.length; i++){
    let order = orders[i];
    switch(order){
      case "l":
        turnLeft(marsRover, order);
        break;
      case "r":
        turnRight(marsRover, order);
        break;
      case "f":
        moveForward(marsRover, order);
        break;
      default:
        console.log("invalid command");
    }
  }
  console.log(marsRover.travelLog);
}




