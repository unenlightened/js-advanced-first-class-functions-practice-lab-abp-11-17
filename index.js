// Code your solution in this file!

const logDriverNames = function(array) {
  array.forEach(function (array){
    console.log(array.name);
  });

  return array;
};

const logDriversByHometown = function(array, location){
  array.forEach(function (array){
    if (array.hometown === location){
      console.log(array.name);
    }
  });

  return array;
};

const driversByRevenue = function(array){
  const revenueSort = function(num1, num2){
    return array[num1].revenue - array[num2].revenue;
  };
  array.sort(revenueSort);
};
