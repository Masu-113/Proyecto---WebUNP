document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault(); //evita que el formulado se envie de forma predeterminada

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    console.log("El formulario a sido enviado");

    if(username === "admin" && password === "1234"){
        console.log("Credenciales correctas");
        window.location.href = "Home.html";
    }
    else{
        alert("Usuario o contraseña no valida. intente de nuevo.");
    }
});