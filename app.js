function loadPaymentDetails()
{
    const urlParams = new URLSearchParams(window.location.search);

    const clientDni = urlParams.get('dni');
    const clientName = urlParams.get('nombre');
    const capitalAmount = parseFloat(urlParams.get('capital')) || 0;
    const interestAmount = parseFloat(urlParams.get('interes')) || 0;
    const dueDate = urlParams.get('vencimiento');

    if (clientName)
    {
        document.getElementById('clientName').textContent = clientName;
    }

    if (clientDni)
    {
        document.getElementById('clientDni').textContent = clientDni;
    }

    if (dueDate)
    {
        document.getElementById('dueDate').textContent = dueDate;
    }

    document.getElementById('capitalAmount').textContent = capitalAmount.toFixed(2);
    document.getElementById('interestAmount').textContent = interestAmount.toFixed(2);

    const totalAmount = capitalAmount + interestAmount;
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

function processPayment()
{
    // Aquí puedes enlazar a MercadoPago, TodoPago, o tu procesador
    alert("Iniciando proceso de pago...");
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function()
{
    loadPaymentDetails();

    const payButton = document.getElementById('payButton');
    if (payButton)
    {
        payButton.addEventListener('click', processPayment);
    }
});