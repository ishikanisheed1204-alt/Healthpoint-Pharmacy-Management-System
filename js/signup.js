
function registerUser() {

    let name = document.getElementById("fullname").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (name === "" || username === "" || password === "") {
        document.getElementById("signup-message").innerHTML =
            "Please fill all required details.";
    }
    else {
        let user = {
            name: name,
            username: username,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Registration Successful!");

        window.location.href = "index.html";
    }
}
