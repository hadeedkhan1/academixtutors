document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var password = document.getElementById("password").value;

    if (password === "edwin34") {
        window.location.href = "33946ed6746.html"; // Redirect
    }
    else if (password === "lila357") {
        window.location.href = "5452li8145.html"; // Redirect
    }
    else if (password === "demo5") {
        window.location.href = "ma82916465.html"; // Redirect
    }    
    else if (password === "autumn1966") {
        window.location.href = "288866au0amgc631966.html"; // Redirect
    }
    else if (password === "kaila45") {
        window.location.href = "45670366902ca528.html"; // Redirect
    }
    else if (password === "jules60") {
        window.location.href = "audy42602727ip35umch2934.html"; // Redirect
    }
    else {
        document.getElementById("message").innerHTML = "Incorrect password. Please try again.";
    }
});
