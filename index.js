function distanceFromHqInBlocks(pickupLocation){
 const scuber = 42;
  if (pickupLocation > scuber){
    return pickupLocation-scuber;
  }
  else {
    return scuber - pickupLocation;
  }
}
function distanceFromHqInFeet(pickupLocation){
  const blocks = distanceFromHqInBlocks(pickupLocation);
  const blocksInFeet = 264;
  const distanceInFeet = blocks * blocksInFeet;
  return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
  const travelledInFeet = 264;
  const blocksByBus = Math.abs ( destination - start );
  const blocksToFeet = travelledInFeet * blocksByBus;
  return blocksToFeet;
}



function calculatesFarePrice(start, destination) {
  const blockFeet = 264;
  const blocksByBus = Math.abs ( destination - start);
  const feetTravelled = blockFeet * blocksByBus;
  if (feetTravelled < 400){
    return 0;
  }
else if(feetTravelled <= 2000){
  const howManyFeet = feetTravelled - 400;
  const fairPrice = howManyFeet * 0.02;
  return fairPrice;
}
else if(feetTravelled <= 2500){
  return 25;
}
else{
  return 'cannot travel that far';
}



}






 