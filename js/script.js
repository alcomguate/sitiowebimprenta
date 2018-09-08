// IIFE
(function () {
    // Listener para disparar funcion cuando el contenido de la pagina es cargada
    document.addEventListener('DOMContentLoaded', function () {

        // Estableciendo listener para formulario de cotizacion
        document.getElementById('contact').addEventListener('submit', enviarCorreo);

        function enviarCorreo(event) {
            event.preventDefault();

            var email = document.getElementById('email').value;
            var telefono = document.getElementById('telefono').value;
            var mensaje = document.getElementById('mensaje').value;

            emailjs.send("alan.vidaurre@gmail.com", "contacto_concepto_grafico",
                {
                    "email": email,
                    "telefono": telefono,
                    "mensaje": mensaje
                }).then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                 }, function(error) {
                    console.log('FAILED...', error);
                 });
            document.getElementById('email').value = '';
            document.getElementById('telefono').value = '';
            document.getElementById('mensaje').value = '';

        }
    });
})();