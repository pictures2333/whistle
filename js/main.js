function showInfo() {
    document.getElementsByClassName("hint")[0].innerHTML = "Username: fbk<br>Password: thecutestfox";
    document.getElementsByClassName("hint")[0].style.visibility = "visible";
}

function login() {
    username = document.getElementById("username").value 
    password = document.getElementById("password").value
    if (username == "fbk" && password == "thecutestfox") {
        location.href="/hacker.html"
    }
    else {
        document.getElementsByClassName("hint")[0].innerHTML = "Wrong username / password";
        document.getElementsByClassName("hint")[0].style.visibility = "visible";
    }
}