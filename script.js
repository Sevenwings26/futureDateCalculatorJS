document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const daysInput = document.getElementById('days');
    const selectedDateInput = document.getElementById('selectedDate')

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

        result.textContent = `${days} days from now, will be --- ${futureDate.toLocaleDateString('en-US', { weekday:'long', month: 'long', day: '2-digit', year: 'numeric' })}.`;
    }


    function calculateDaysUntil() {
        const selectedDate = new Date(selectedDateInput.value);
        if (isNaN(selectedDate.getTime())) {
            dateResult.textContent = "Please select a valid date.";
            return;
        }

        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set time to midnight for consistency
        selectedDate.setHours(0, 0, 0, 0); // Set time to midnight for consistency

        const diffTime = selectedDate - currentDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

        if (diffDays < 0) {
            dateResult.textContent = "The selected date is in the past.";
        } else {
            dateResult.innerHTML = `${diffDays} days until ${selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: '2-digit', year: 'numeric' })}.`;
        }
    }


    function resetForm() {
        daysInput.value = '';
        result.textContent = '';
        selectedDateInput.value = '';
        dateResult.textContent = '';
    }

    function exitProgram() {
        result.textContent = "Stay positive";
        dateResult.textContent = "Prepare always";
    }

    window.calculateFutureDate = calculateFutureDate;
    window.resetForm = resetForm;
    window.exitProgram = exitProgram;
    window.calculateDaysUntil = calculateDaysUntil;
});
