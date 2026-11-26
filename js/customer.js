
function addCustomer() {

    let name = document.getElementById("customer-name").value;
    let phone = document.getElementById("customer-phone").value;
    let email = document.getElementById("customer-email").value;

    if (name === "" || phone === "" || email === "") {
        alert("Please fill all the fields.");
    }
    else {

        let table = document.querySelector("#customers table");
        let row = table.insertRow();

        row.insertCell(0).innerHTML = "C103";
        row.insertCell(1).innerHTML = name;
        row.insertCell(2).innerHTML = phone;
        row.insertCell(3).innerHTML = email;

        alert("Customer added successfully!");

        document.querySelector("#add-customer form").reset();
    }
}
 