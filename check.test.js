const { TestScheduler } = require("jest");

let addOne = function (num) {
  let newConstantNum = num;
  newConstantNum += 1;
  return newConstantNum;
};

test ('passing test' , ()=>{
    expect (addOne(5)).toBe (6);
})
