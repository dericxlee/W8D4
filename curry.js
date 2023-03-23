// Function.prototype.curry = function(numArgs){
//     const arr = [];
//     const that = this;
//     return function callArgs(arg){
//         arr.push(arg);

//         if(arr.length === numArgs ){
//             return that.apply(null, arr);
//         } else {
//             return callArgs;
//         }
//     }
// }

Function.prototype.curry = function(numArgs){
    const arr = [];
    const that = this;
    
    return function callArgs(arg){
        arr.push(arg);
        
        if(arr.length === numArgs ){
            return that(...arr);
        } else {
            return callArgs;
        }
    }
}


let sum = function(...args){ 
    let sum = 0;
    args.forEach(ele => {
        sum += ele;
    });

    return sum;
};
console.log(sum.curry(5)(30)(20)(1)(2)(2)); // => 56
