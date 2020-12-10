export const delay = (function() {
  let timer = 0;
  return function(callback: Function, ms: number) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();
