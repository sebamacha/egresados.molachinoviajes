// Obtener los valores de usuario y contraseña ingresados por el usuario
var usuario = document.getElementById('usuario').value;
var contrasena = document.getElementById('contrasena').value;

// Validar el acceso
if (usuario === 'admin' && contrasena === '12345') {
  // Redirigir al panel de administración si el usuario es "admin"
  window.location.href = 'panel-admin.html';
} else if (usuario === 'coordinador' && contrasena === '54321') {
  // Redirigir a la página de coordinadores si el usuario es "coordinador"
  window.location.href = 'coordinadores.html';
} else if (usuario === 'familiar' && contrasena === 'abcde') {
  // Redirigir a la página de familiares si el usuario es "familiar"
  window.location.href = 'familiares.html';
} else {
  // Mostrar un mensaje de error si las credenciales son incorrectas
  alert('Usuario o contraseña incorrectos');
}

<script src="https://freegeoip.app/json"></script>

<script>
function getLocation() {
  var response = $.getJSON("https://freegeoip.app/json");
  response.done(function(data) {
    document.getElementById("ip").innerHTML = data.ip;
    document.getElementById("country").innerHTML = data.country_name;
    document.getElementById("city").innerHTML = data.city;
    document.getElementById("latitude").innerHTML = data.latitude;
    document.getElementById("longitude").innerHTML = data.longitude;
  });
  response.fail(function(error) {
    alert("Error getting location: " + error);
  });
}
</script>

<input type="button" onclick="getLocation()" value="Get Location">
<input type="text" id="ip" readonly>
<input type="text" id="country" readonly>
<input type="text" id="city" readonly>
<input type="text" id="latitude" readonly>
<input type="text" id="longitude" readonly></input>