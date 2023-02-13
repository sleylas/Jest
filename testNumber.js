function filterPrice(value) {
    return value >= 30
}
let price = [2, 30, 45, 30, , 4, 6].filter(filterPrice);
console.log(price);