
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

// Función para conectar a la API
async function fetchDataFromAPI() {
    try {
        const response = await fetch('http://3.138.155.108:3000/');
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();
        displayContent(data.title, data.body);
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
    }
}

document.querySelector("form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username")?.value;
    const password = document.getElementById("password")?.value;

    if (username === "admin" && password === "1234") {
        fetchDataFromAPI();
        window.location.href = "Home.html";
    } else {
        alert("Usuario o contraseña no válidos. Intente de nuevo.");
    }
});
