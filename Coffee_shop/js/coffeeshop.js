const TEA_PRICE = 1.5;
const COFFEE_PRICE = 2;
const TAX_RATE = 0.175;

function updateOrder() {
    var numCoffees = document.getElementById("numCoffees").value;
    var numTeas = document.getElementById("numTeas").value;

    if (numCoffees === "") {
      numCoffees = 0;
    }

    if (numTeas === "") {
      numTeas = 0;
    }

    numCoffees = parseInt(numCoffees);
    numTeas = parseInt(numTeas);

    var subTotal = (numCoffees * COFFEE_PRICE) + (numTeas * TEA_PRICE);
    document.getElementById("subTotalValue").innerHTML = subTotal.toFixed(2);

    var tax = subTotal * TAX_RATE;
    document.getElementById("taxValue").innerHTML = tax.toFixed(2);

    var total = subTotal + tax;
    document.getElementById("totalValue").innerHTML = total.toFixed(2);
}
