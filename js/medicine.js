
function addMedicine() {

    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;
    let expiry = document.getElementById("expiry").value;

    if (name === "" || category === "" ||
        quantity === "" || price === "" || expiry === "") {

        alert("Please fill all the fields.");
    }
    else {

        let table = document.querySelector("#medicines table");
        let row = table.insertRow();

        row.insertCell(0).innerHTML = "M103";
        row.insertCell(1).innerHTML = name;
        row.insertCell(2).innerHTML = category;
        row.insertCell(3).innerHTML = quantity;
        row.insertCell(4).innerHTML = "₹" + price;
        row.insertCell(5).innerHTML = expiry;

        alert("Medicine added successfully!");

        document.querySelector("#add-medicine form").reset();
    }
}

function searchMedicine() {

    let search = document.getElementById("search-medicine").value.toLowerCase();

    let rows = document.querySelectorAll("#medicines table tr");

    for (let i = 1; i < rows.length; i++) {

        let name = rows[i].cells[1].innerHTML.toLowerCase();

        if (name.includes(search)) {
            rows[i].style.display = "";
        }
        else {
            rows[i].style.display = "none";
        }
    }
}
