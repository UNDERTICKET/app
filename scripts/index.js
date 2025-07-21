// Dark mode toggle
(function() {
  const toggle = document.getElementById('darkModeToggle');
  const label = document.getElementById('darkModeLabel');
  const body = document.body;
  // Cargar preferencia
  function setMode(dark) {
    if (dark) {
      body.classList.add('dark-mode');
      toggle.checked = true;
      label.textContent = 'Light Mode';
    } else {
      body.classList.remove('dark-mode');
      toggle.checked = false;
      label.textContent = 'Dark Mode';
    }
    localStorage.setItem('underticket-darkmode', dark ? '1' : '0');
  }
  // Inicializar
  const saved = localStorage.getItem('underticket-darkmode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setMode(saved === null ? prefersDark : saved === '1');
  // Evento
  toggle.addEventListener('change', function() {
    setMode(toggle.checked);
  });
})();
