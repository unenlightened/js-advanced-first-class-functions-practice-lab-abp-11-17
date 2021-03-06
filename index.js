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
  const newArray = [...array];

  newArray.sort(function (a, b) {
    return a.revenue - b.revenue;
  });

  return newArray;

};

const driversByName = function(array){
  const newArray = [...array];

  newArray.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  return newArray;
};

const totalRevenue = function(array){
  const getRev = function (agg, el, i, arr){
    return agg + el.revenue;
  };

  return array.reduce(getRev, 0);
};

const averageRevenue = function(array){
  return totalRevenue(array) / array.length;
};
