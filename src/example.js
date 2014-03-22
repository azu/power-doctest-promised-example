/**
 * Created by azu on 2014/03/22.
 * LICENSE : MIT
 */
"use strict";
var Promise = require("ypromise");
var array = [1, 2, 3, 4, 5];
setTimeout(function () {
    array;//=> [0, 2, 3, 4, 5]
}, 16);
// return [p(ms),p(ms)]
function promisedMapping(ary) {
    function timerPromisefy(value) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(value + "-promised");
            }, value);
        });
    }

    return ary.map(timerPromisefy);
}

var promisedArray = promisedMapping(array);
Promise.all(promisedArray).then(function (values) {
    values[0];// => "1-promised"
}).catch(function(error){
    console.log(error.message);
});
