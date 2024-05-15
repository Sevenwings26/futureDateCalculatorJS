document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const daysInput = document.getElementById('days');

    function calculateFutureDate() {
        const days = parseInt(daysInput.value, 10);

        if (isNaN(days)) {
            result.textContent = "Please enter a valid number.";
            return;
        }

        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set time to midnight for consistency
        const futureDate = new Date(currentDate.getTime());
        futureDate.setDate(futureDate.getDate() + days);

        result.textContent = `${days} days from now, will be ${futureDate.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}.`;
    }

    function resetForm() {
        daysInput.value = '';
        result.textContent = '';
    }

    function exitProgram() {
        result.textContent = "Stay positive";
    }

    window.calculateFutureDate = calculateFutureDate;
    window.resetForm = resetForm;
    window.exitProgram = exitProgram;
});
