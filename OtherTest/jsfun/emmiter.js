function onceCall(callback) {
  let flag = true;
  return (args) => {
    if (flag) {
      flag = false;
      callback(args);
    }
  }
}

class Emmiter {

  constructor() {
    this.reader = {};
  }

  read(key, callback) {
    if (this.reader[key]) {
      this.reader[key].push(callback);
    } else {
      this.reader[key] = [callback];
    }
  }

  onceRead(key, callback) {
    if (this.reader[key]) {
      this.reader[key].push(onceCall(callback));
    } else {
      this.reader[key] = [onceCall(callback)];
    }
  }

  publish(key, ...args) {
    if (this.reader[key]) {
      for (let i = 0; i < this.reader[key].length; i++) {
        this.reader[key][i](args)
      }
    }
  }

  delete(key, callback) {
    //
  }
}

const emmiter = new Emmiter();

emmiter.read("click", (args) => {
  console.log("click1", args);
})

emmiter.read("click", (args) => {
  console.log("click2", args);
})

emmiter.onceRead("click", (args) => {
  console.log("click3", args);
})

emmiter.publish("click", "test1")
emmiter.publish("click", "test2")