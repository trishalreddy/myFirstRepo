document.getElementById("regform").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let number = document.getElementById("number").value.trim();
    let password = document.getElementById("password").value.trim();
    let course = document.getElementById("course").value;
    let gender ="";
    let g=document.getElementsByName("gender");
    for(let i=0;i<g.length;i++)
        if(g[i].checked)
            gender=g[i].value;
    if (name === "") {
        alert("Please enter your name");
        return;
    }
    if (email === "") {
        alert("Please enter your email");
        return;
    }
    if (number === "") {
        alert("Please enter your mobile number");
        return;
    }
    if (number.length !== 10 ) {
        alert("Enter a valid 10-digit mobile number");
        return;
    }
    if (password === "") {
        alert("Please enter your password");
        return;
    }
    if (!gender) {
        alert("Please select your gender");
        return;
    }
    if (course === "") {
        alert("Please select a course");
        return;
    }
    alert("Registration Completed");

    document.getElementById("result").innerHTML="<h2>Registration Successfull</h2>"+"<p>name: "+name+"</p><p>Email: "+email+"</p><p>password: "+password+"</p><p>Gender: "+gender+"</p><p>Course: "+course+"</p>";
});