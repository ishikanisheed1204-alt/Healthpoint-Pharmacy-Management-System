
function addSupplier() {

    let name = document.getElementById("supplier-name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    if (name === "" || phone === "" || email === "") {
        alert("Please fill all the fields.");
    }
    else {

        let table = document.querySelector("#suppliers table");
        let row = table.insertRow();

        row.insertCell(0).innerHTML = "S103";
        row.insertCell(1).innerHTML = name;
        row.insertCell(2).innerHTML = phone;
        row.insertCell(3).innerHTML = email;

        alert("Supplier added successfully!");

        document.querySelector("#add-supplier form").reset();
    }
}

