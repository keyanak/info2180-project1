document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.newsletter form');
    const emailInput = document.querySelector('#email');
    const messageDiv = document.querySelector('.message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
        } else {
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
    });
});
