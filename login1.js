function login (){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    if(email==="" || password==="")
    {
        alert("Fill all fields!")
    }

    else if(!email.endsWith("@gmail.com")){
        alert("Email must be a @gmail.com address")
    }

    else if(password.length<5)
    {
        alert("passowrd must be greater than 5 charater");
    }

    else{
        alert("Login sucessfull!")
    }
}

function togglePassword() {
    let pass = document.getElementById("password");

    if (pass.type === "password") {
        pass.type = "text";   // show password
    } 
    else {
        pass.type = "password"; // hide password
    }
}

