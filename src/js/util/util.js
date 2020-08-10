/**
 * 
 * @param {function} fn 
 * @param {munber} wait 
 */
export const throttle = (fn, wait) => {
  let last = 0;
  return function(){
      var now = Date.now();
      if(now - last > wait){
          fn.apply(this, arguments);
          last = now;
      }
  }
}