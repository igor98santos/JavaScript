//Map
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(array)
console.log(array.map((item) => item * 2))
console.log(array.map((item) => item * 2))
console.log(array)


//com THIS
const maca = {
    value: 2,
}
const laranja = {
    value:3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
     return item * this.value;
    }, thisArg)
}
const nums = [1,2]
console.log('this -> macã',mapComThis(nums,maca))
console.log('this -> laranja',mapComThis(nums,laranja))

