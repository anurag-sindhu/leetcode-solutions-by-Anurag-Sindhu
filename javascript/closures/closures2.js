// This example is explained in detail below (just after this code box).
function celebrityIDCreator (theCelebrities) {
  var i;
  var uniqueID = 100;
  for (i = 0; i < theCelebrities.length; i++) {
    theCelebrities[i]["id"] = function ()  {
      return uniqueID + i;
    }
  }

  return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

console.log(createIdForActionCelebs)

var stalloneID = createIdForActionCelebs [0];
  console.log(stalloneID.id); // 103
  console.log(stalloneID.id()); // 103
