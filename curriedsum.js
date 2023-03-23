function curriedSum(arr){
    const num = [];
    return function arrSum(n){
        num.push(n);
        if (num.length === arr){
            let total = 0;
            num.forEach(ele => {
                total += ele;
            });
            return total;
        }
        else {
            return arrSum;
        }
    }
}




// sumThree.curry(3)(4)(20)(6); // == 30

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56