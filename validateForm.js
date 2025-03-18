
        document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
           return submitForm();
        });

        function submitForm() {
            // Get values from form fields
            let name = document.querySelector('#name').value;
            let gmail = document.querySelector('#gmail').value;
            let age = document.querySelector('#age').value;
            let pass = document.querySelector('#password').value;

            // Regular expression to validate name (only letters)
            const namePattern = /^[A-Za-z]+$/;

            // Regular expression to validate email format
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            // Name validation: not empty, contains only letters
            if (name === "") {
                alert("Name is required.");
                return;
            }
            if (!namePattern.test(name)) {
                alert("Name can only contain letters.");
                return;
            }

            // Email (gmail) validation: not empty, valid email format
            if (gmail === "") {
                alert("Email is required.");
                return;
            }
            if (!emailPattern.test(gmail)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Age validation: not empty, must be greater than 0
            if (age === "" || age <= 0) {
                alert("Please enter a valid age.");
                return;
            }

            // Password validation: not empty, at least 6 characters
            if (pass === "") {
                alert("Password is required.");
                return;
            }
            if (pass.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }

            // If all validations pass
            alert("Form submitted successfully!");
            return false;
        }

