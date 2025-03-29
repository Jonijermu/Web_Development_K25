'use strict';


const counterIIFE  =  (function () {
  let counter = 0;

  let object = {
    increment: function ()  {
      counter += 1;
      console.log(counter);
    },
    reset: function  ()  {
      counter  = 0;
      console.log(counter);
    }
  };

  return object;
})();

counterIIFE.increment();
counterIIFE.increment();
counterIIFE.reset()
counterIIFE.increment();
