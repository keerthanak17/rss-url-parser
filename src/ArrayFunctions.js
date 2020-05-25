class ArrayFunction {
  arrayMap = (array, callback) => {
    length = array.length;
    if (typeof callback != "function" || !length) {
      throw new TypeError();
    } else {
      let i,
        newArray = [];
      for (i = 0; i < length; i++) {
        newArray.push(callback(array[i]));
      }
      return newArray;
    }
  };
  arrayFilter = (array, callback) => {
    length = array.length;
    if (typeof callback != "function" || !length) {
      throw new TypeError();
    } else {
      let i,
        newArray = [];
      for (i = 0; i < length; i++) {
        if (callback(array[i])) {
          newArray.push(array[i]);
        }
      }
      return newArray;
    }
  };
  arrayForEach = (array, callback) => {
    length = array.length;
    if (typeof callback != "function" || !length) {
      throw new TypeError();
    } else {
      let i;
      for (i = 0; i < length; i++) {
        array[i] = callback(array[i]);
      }
      return array;
    }
  };
  arrayReduce = (array, callback, initialVal) => {
    length = array.length;
    if (typeof callback != "function" || !length) {
      throw new TypeError();
    } else {
      let i,
        accumulator = initialVal;
      for (i = 0; i < length; i++) {
        accumulator = callback(accumulator, array[i]);
      }
      return accumulator;
    }
  };
}

const functions = new ArrayFunction();
let array1 = [1,2,3,4,5];

// ArrayFilter() - Filters an array to a new one
console.log("Original Array",array1);
console.log("Filtered Array",functions.arrayFilter(array1, x => x>2));
console.log("Original Array - Unchanged",array1);

// ArrayReduce() - Reduces the array to a single value 
console.log("Original Array",array1);
reducer1 = (acc, totValue) => { return acc + totValue}
reducer2 = (acc, totValue) => { return acc * totValue}
console.log("Reduced to sum of array",functions.arrayReduce(array1, reducer1, 100));
console.log("Reduced to product of array",functions.arrayReduce(array1, reducer2, 100));
console.log("Original Array - Unchanged",array1);

// ArrayMap() - Changes are NOT made to the array with Map
console.log("Original Array",array1);
console.log("Mapped Array no1",functions.arrayMap(array1, x => x*2));
console.log("Mapped Array no2",functions.arrayMap(array1, x => `${x*5}`));
console.log("Original Array - Unchanged",array1);

// ArrayForEach() - Changes are made to the array with ForEach
console.log("Original Array",array1);
console.log("First change to Array",functions.arrayForEach(array1, x => x*2));
console.log("Second change to Array",functions.arrayForEach(array1, x => `${x*5}`));
console.log("Original Array - Now changed",array1);

