const Event = (() => {
  const clientList = {};
  const listen = (key, fn) => {
    if (!clientList[key]) {
      clientList[key] = [];
    }
    clientList[key].push(fn);
  };
  const trigger = function () {
    const key = Array.prototype.shift.call(arguments);
    const fns = clientList[key];

    if (!fns || fns.length === 0) {
      return false;
    }

    for (let i = 0, fn; (fn = fns[i++]);) {
      fn.apply(this, arguments);
    }
  };

  return {
    listen: listen,
    trigger: trigger,
  };
})();

Event.listen("squareMeter88", (price) => {
  console.log(`价格=${price}`);
});

Event.trigger("squareMeter88", 2000000);
