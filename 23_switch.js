const metodoPago = 'cheque';

switch(metodoPago) {
    case 'tarjeta':
        alert('Pagaste con tarjeta')
        break;
    case 'cheque':
        alert('El usuario quiere pagar con cheque');
        break;
    default:
        alert('aun no has pagado')
        break;
}