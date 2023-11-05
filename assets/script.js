document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from actually submitting

    // Process the form data or perform any desired actions here

    // Show the response message
    document.getElementById('response').style.display = 'block';
});
