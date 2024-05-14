document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('transaction-form');
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const transactionList = document.getElementById('transaction-list');
    const totalAmount = document.getElementById('total-amount');

    let transactions = [];

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const description = descriptionInput.value;
        const amount = parseFloat(amountInput.value);

        if (description.trim() === '' || isNaN(amount)) {
            alert('Please enter valid description and amount.');
            return;
        }

        const transaction = {
            description,
            amount
        };

        transactions.push(transaction);

        renderTransactions();
        updateTotal();

        descriptionInput.value = '';
        amountInput.value = '';
    });

    function renderTransactions() {
        transactionList.innerHTML = '';

        transactions.forEach(function(transaction) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${transaction.description}</td>
                <td>$${transaction.amount.toFixed(2)}</td>
            `;
            transactionList.appendChild(row);
        });
    }

    function updateTotal() {
        const total = transactions.reduce((acc, curr) => acc + curr.amount, 0);
        totalAmount.textContent = total.toFixed(2);
    }
});
