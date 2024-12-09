// Función para mostrar contenido dinámico en la página de inicio
function displayContent(title, body) {
    const titleElement = document.getElementById('dynamic-title');
    const bodyElement = document.getElementById('dynamic-body');
    
    if (titleElement && bodyElement) {
        titleElement.textContent = title;
        bodyElement.textContent = body;
    } else {
        console.error('Los elementos dynamic-title o dynamic-body no existen en el DOM.');
    }
}

// Lógica para el formulario de inicio de sesión
document.querySelector("form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username")?.value;
    const password = document.getElementById("password")?.value;

    if (username === "admin" && password === "1234") {
        window.location.href = "Home.html";
    } else {
        alert("Usuario o contraseña no válidos. Intente de nuevo.");
    }
});
