const inputData = function(col) {
    return (col instanceof Array) ? col.slice() : Object.values(col);
  }

  const myEach = function(collection, callback) {
    const newCollection = inputData(collection);
   
     for (let idx = 0; idx < newCollection.length; idx++) {
       callback(newCollection[idx]);
     }
   
     return collection;
 }

const myMap = function(collection, callback) {
    const newCollection = inputData(collection);
  
    const newArr = [];
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      newArr.push(callback(newCollection[idx]));
    }
  
    return newArr;
}

