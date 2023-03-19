const callback = (el) => {
  console.log(el)
};

function mapping(elem, callback) {
  if(typeof elem !== 'object') {
    alert('Wrong type. Type must be object or array');
    return;
  };
  
  if(typeof elem === 'object') {
    if(Array.isArray(elem)) {
      for(el of elem) {
        callback(el);
      };
      
      return [...elem];
    };
    
    for(el in elem) {
        callback(el);
      };
    
    return {...elem};
  };
  
};

console.log(mapping({sasha: 'misha', petya: 'vasya'}, callback));















Array.prototype.newFilter = function(callBack) {
 let resultObj = {
   right: [],
   wrong: []
 };
  
 for (let i = 0; i < this.length; i++) {
  let result = callBack(this[i], i, this);
    if (result) {
      resultObj.right.push(this[i]);
    } else {
      resultObj.wrong.push(this[i]);
    }
}
  
return resultObj;

};

console.log([1, 4, 50, 3, 57, 25, 0, 5].newFilter((elem) => elem > 10));