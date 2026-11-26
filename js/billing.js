
function calculateTotal() {

    let quantity = Number(document.getElementById("quantity").value);
    let price = Number(document.getElementById("price").value);

    let total = quantity * price;

    document.getElementById("grand-total").innerHTML =
        "₹" + total.toFixed(2);
}


function generateBill() {

    let customer = document.getElementById("customer").value;
    let medicine = document.getElementById("medicine").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;
    let payment = document.getElementById("payment").value;

    if (customer === "" || medicine === "" ||
        quantity === "" || price === "" || payment === "") {

        alert("Please fill all the fields.");
    }
    else if (Number(quantity) <= 0 || Number(price) <= 0) {

        alert("Enter valid quantity and price.");
    }
    else {

        alert("Bill generated successfully!");
    }
}
