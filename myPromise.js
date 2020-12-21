// const { resolve } = require("core-js/fn/promise");
// const { throttle } = require("lodash");

function myPromise(excutor) {
    let self = this;
    self.status = 'pending';
    self.value = null;//成功结果
    self.reason = null;//失败原因

    // 容器
    self.onFullfilledCallbacks = [];
    self.onRejectedCallbacks = [];

    function resolve(value) {
        if (self.status === 'pending') {
            self.value = value;
            self.status = 'fulfilled';
            // 状态改变,取出来
            self.onFullfilledCallbacks.forEach(item => item(value))        
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.reason = reason;
            self.status = 'reject';
            self.onRejectedCallbacks.forEach(item => item(reason))
        }
    }

    try {
        excutor(resolve,reject)
    }catch {
        reject(err)
    }
}

myPromise.prototype.then = function(onFullfilled,onRejected) {
    onFullfilled = typeof onFullfilled === 'function' ?
    onFullfilled : function (data) { resolve(data) };

    onRejected = typeof onRejected === 'function' ?
    onRejected : function (err) { throw err };

    let self = this;
    if (self.status === 'pending') {
        self.onFullfilledCallbacks.push(onFullfilled);
        self.onRejectedCallbacks.push(onRejected);
    }
}

let demo =new myPromise( (resolve,reject) => {
    console.log("promise");
    setTimeout(() => {
        resolve(111)
    }, 1000);
})
demo.then(data => console.log(data))