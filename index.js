// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
let newDrivers = drivers.slice(0, 2);
return newDrivers;
}
const returnLastTwoDrivers = function(drivers){
 let newDrivers1 = drivers.slice(-2);
 return newDrivers1 
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(num) {
    return function (num) {
      return num * num
    };
  }
  const fareDoubler = function (num){
    const theDouble = num * 2;
    return theDouble
  }
  const fareTripler = function (num){
    const theTriple = num * 3;
    return theTriple
  }
  function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
   return returnFirstTwoDrivers(drivers);
    
  }