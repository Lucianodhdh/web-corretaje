// Filtrar propiedades por precio
const precioInput = document.getElementById('precio');
const precioValue = document.getElementById('precio-value');

// Mostrar el valor del rango de precio
precioInput.addEventListener('input', function() {
    const value = precioInput.value;
    precioValue.textContent = `$0 - $${value}`;
});

// Agregar más filtros de búsqueda aquí (por ejemplo, tipo de propiedad y habitaciones)
