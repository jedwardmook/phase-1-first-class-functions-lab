// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function fareMultiplier() {
    return (5*5);
}

const createFareMultiplier = function(){
    return fareMultiplier;
}

const fareDoubler = fare => fare*2;

const fareTripler = fare => fare*3;

function selectDifferentDrivers (differentDrivers, whichTwo){
    return whichTwo(differentDrivers);
}
