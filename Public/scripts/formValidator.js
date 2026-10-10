//Form Validator
(function () {
    'use strict'

    // Title Case check function
    function isTitleCase(str) {
        return str.trim().split(/\s+/).every(word => /^[A-Z][a-z]*$/.test(word));
    }
    //Fetch form on which validation must be applied
    const forms = document.querySelectorAll('.validated-form')

    //Loop over them and prevent submission
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                // Custom Title Case checks
                const nameInput = form.querySelector('#name');
                const locationInput = form.querySelector('#location');

                [nameInput, locationInput].forEach(input => {
                    if (input) {
                        if (input.value.trim() === "" || !isTitleCase(input.value)) {
                            // ❌ Either empty OR not Title Case → invalid
                            input.classList.add('is-invalid');
                            input.classList.remove('is-valid');
                            event.preventDefault();
                        } else {
                            // ✅ Non-empty AND Title Case → valid
                            input.classList.add('is-valid');
                            input.classList.remove('is-invalid');
                        }
                    }
                });
                form.classList.add('was-validated')
            }, false)

            const inputs = form.querySelectorAll('#name, #location');
            inputs.forEach(input => {
                input.addEventListener('input', function () {
                    if (isTitleCase(input.value)) {
                        input.classList.add('is-valid');
                        input.classList.remove('is-invalid');
                    } else {
                        input.classList.add('is-invalid');
                        input.classList.remove('is-valid');
                    }
                });
            });
        });
})();