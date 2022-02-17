var arr1 = [1, 2, 3, 5, 6, 8, 9];

function calculateSquare(arr){
    return arr.map((obj) =>{
        return Math.pow(obj,2);
    })
}

console.log(calculateSquare(arr1));