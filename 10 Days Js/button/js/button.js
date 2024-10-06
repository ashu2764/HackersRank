
document.addEventListener('DOMContentLoaded', function () {
    // Create the button element
    const button = document.createElement('button');
    button.id = 'btn'; // Set the button's id
    button.innerHTML = 0; // Set initial label to 0

    // Add a click event listener to the button
    button.addEventListener('click', function () {
        // Increment the button's label value
        button.innerHTML = parseInt(button.innerHTML) + 1;
    });

    // Append the button to the body of the document
    document.body.appendChild(button);
});


