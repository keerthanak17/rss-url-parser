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
  arrayReduce = (array, callback) => {
    length = array.length;
    if (typeof callback != "function" || !length) {
      throw new TypeError();
    } else {
      let i, accumulator;
      for (i = 0; i < length; i++) {
        accumulator = callback(array[i]);
      }
      return accumulator;
    }
  };
}
