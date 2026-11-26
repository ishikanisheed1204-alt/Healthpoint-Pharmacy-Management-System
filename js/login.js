function loginUser() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser === null) {
        document.getElementById("login-message").innerHTML =
            "Please register first.";
    }
    else if (username === savedUser.username &&
             password === savedUser.password) {

        alert("Login Successful!");
        window.location.href = "dashboard.html";
    }
    else {
        document.getElementById("login-message").innerHTML =
            "Invalid username or password.";
    }
}
