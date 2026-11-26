
function addPrescription() {

    let patient = document.getElementById("patient").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;
    let medicine = document.getElementById("medicine").value;

    if (patient === "" || doctor === "" ||
        date === "" || medicine === "") {

        alert("Please fill all the fields.");
    }
    else {

        let table = document.querySelector("#prescriptions table");
        let row = table.insertRow();

        row.insertCell(0).innerHTML = "P103";
        row.insertCell(1).innerHTML = patient;
        row.insertCell(2).innerHTML = doctor;
        row.insertCell(3).innerHTML = medicine;

        alert("Prescription added successfully!");

        document.querySelector("#add-prescription form").reset();
    }
}
