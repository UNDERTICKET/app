
// Función genérica para copiar texto desde un elemento y dar feedback UX
function copiarTexto(idTexto, icono, mensaje) {
  const texto = document.getElementById(idTexto).innerText;

  navigator.clipboard.writeText(texto)
    .then(() => {
      icono.classList.add('text-success');

      icono.setAttribute('data-bs-toggle', 'tooltip');
      icono.setAttribute('data-bs-placement', 'top');
      icono.setAttribute('title', mensaje);

      let tooltip = bootstrap.Tooltip.getInstance(icono);
      if (!tooltip) {
        tooltip = new bootstrap.Tooltip(icono);
      } else {
        tooltip.setContent({ '.tooltip-inner': mensaje });
      }

      tooltip.show();

      setTimeout(() => {
        tooltip.hide();
        // icono.classList.remove('text-success'); // opcional
      }, 2000);
    })
    .catch(err => {
      console.error('Error al copiar:', err);
    });
}

// Asignar eventos a cada ícono
document.getElementById('btnCopiarCVU').addEventListener('click', function () {
  copiarTexto('numeroCuenta', this, 'CVU copiado');
});

document.getElementById('btnCopiarAlias').addEventListener('click', function () {
  copiarTexto('aliasName', this, 'Alias copiado');
});

// Script nativo para copiar al portapapeles
// document.getElementById('btnCopiar').addEventListener('click', function () {
//     const texto = document.getElementById('numeroCuenta').innerText;
//     navigator.clipboard.writeText(texto)
//         .then(() => {
//             console.log('Texto copiado al portapapeles:', texto);
//             // Opcional: mostrar feedback al usuario
//             alert('Número copiado');
//         })
//         .catch(err => {
//             console.error('Error al copiar: ', err);
//             alert('No se pudo copiar el número');
//         });
// });


// // Asegurarse de que el DOM esté cargado y Bootstrap 5 esté disponible
// document.getElementById('btnCopiar').addEventListener('click', function () {
//     const texto = document.getElementById('numeroCuenta').innerText;
//     const icono = document.getElementById('btnCopiar');

//     navigator.clipboard.writeText(texto)
//       .then(() => {
//         // Cambiar color visual
//         icono.classList.add('text-success');

//         // Configurar el tooltip
//         icono.setAttribute('data-bs-toggle', 'tooltip');
//         icono.setAttribute('data-bs-placement', 'top');
//         icono.setAttribute('title', 'CVU copiado');

//         // Crear o actualizar instancia
//         let tooltip = bootstrap.Tooltip.getInstance(icono);
//         if (!tooltip) {
//           tooltip = new bootstrap.Tooltip(icono);
//         } else {
//           tooltip.setContent({ '.tooltip-inner': 'CVU copiado' });
//         }

//         // Mostrar el tooltip
//         tooltip.show();

//         // Ocultar tooltip y resetear color tras 2 segundos
//         setTimeout(() => {
//           tooltip.hide();
//           // icono.classList.remove('text-success'); // opcional si querés volver al color original
//         }, 2000);
//       })
//       .catch(err => {
//         console.error('Error al copiar:', err);
//         // Se puede añadir feedback en caso de error si se desea
//       });
//   });
