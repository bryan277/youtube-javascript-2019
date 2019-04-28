const orders = [500, 30, 99, 15, 223];

//Bad code
const total = 0;
const withTax = [];
const highValue = [];

for (let i = 0; i < orders.length; i++) {

    total += orders[i];

    withTax.push(orders[i] * 1.1);

    if (orders[i] > 100) {
        highValue.push(orders[i])
    }
}
console.log(total);


//Good code
//Reduce
const total = orders.reduce((acc, cur) => acc + cur)

// Map
const withTax = orders.map(v => v * 1.1)

//Filter
const highValue = orders.filter(v => > 100);
