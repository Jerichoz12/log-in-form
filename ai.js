document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    const linkInput = document.getElementById('linkInput');

    generateButton.addEventListener('click', function(event) {
        event.preventDefault(); // Pigilan ang default form submission

        const link = linkInput.value;
        console.log('Pasted link:', link);

        // Redirect to typer.html and pass the link as a URL parameter
        window.location.href = 'typer.html?link=' + encodeURIComponent(link);
    });
});