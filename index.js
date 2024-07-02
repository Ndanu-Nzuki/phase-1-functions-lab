// Code your solution in this file!
index.js
function distanceFromHqInBlocks(pickUpLocation){
    const hqLocation = 42;
    return Math.abs(pickUpLocation - hqLocation);
}    

//distance from hq in feet
function distanceFromHqInFeet(pickUpLocation){
    const blocks = distanceFromHqInBlocks(pickUpLocation);
    return blocks * 264;
}
    
//distance travelled in feet
function distanceTravelledInFeet(start, destination){
    const distanceInBlocks = Math.abs(destination - start);
    return distanceInBlocks * 264;
}

//calculates fare price
function calculatesFarePrice(start, destination){
    const distanceInBlocks = Math.abs(destination - start);
    let distanceInFeet = distanceInBlocks * 264;
    
    if (distanceInFeet <= 400){
        return 0;
    }else if (distanceInFeet >= 401 && distanceInFeet <= 2000){
        return (distanceInFeet - 400)*0.02;
    }else if (distanceInFeet >= 2001 && distanceInFeet <= 2500){
        return 25;
    }else {
        return "cannot travel that far"
    }

}