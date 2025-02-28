let accion = 'listar';

switch (accion) {
    case 'listar':
        console.log('Listar todos los elementos');
        break;
    case 'crear':
        console.log('Crear un nuevo elemento');
        break;
    case 'borrar':
        console.log('Borrar un elemento');
        break;
    case 'actualizar':
        console.log('Actualizar un elemento');
        break;
    default:
        console.log('Acción no reconocida');
        break;
}