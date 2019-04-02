// task #1
let i=2;
while (i<=100) {    
    let isPrime = true;
    let j=2;
    while (j<i && isPrime) {
        if (i % j == 0) isPrime = false;
        j++;
    }
 
    if (isPrime) console.log(i); // простое

    i++;
}

// task #2 & #3
let basketItems = [
    {product: 'Apples', quantity: 5, price: 100},
    {product: 'Oranges', quantity: 7, price: 120},
    {product: 'Peaches', quantity: 3, price: 140},
    {product: 'Grapes', quantity: 2, price: 110}
];

function countBasketPrice(items) {
    let sumTotal = 0;
    for (let i = 0; i < items.length; i++) {
        sumTotal += items[i].quantity * items[i].price; 
    }

    return sumTotal;
}

console.log(countBasketPrice(basketItems));


// task #4
for (
    var i = 0; 
    i < 10; 
    console.log(i), 
    i++
){}

// task #5
