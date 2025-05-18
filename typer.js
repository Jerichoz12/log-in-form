document.addEventListener('DOMContentLoaded', function() {
    const pastedLinkElement = document.getElementById('pastedLink');
    const generatedCodeElement = document.getElementById('generatedCode');
    const paymentMessageElement = document.getElementById('paymentMessage');
    const qrCodeElement = document.getElementById('qrCode');
    const referenceIdInput = document.getElementById('referenceId');
    const referenceIdError = document.getElementById('referenceIdError');
    const submitReferenceId = document.getElementById('submitReferenceId');
    const paymentStatusNotification = document.getElementById('paymentStatusNotification'); // Get the new notification div

    // Get the link from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const link = urlParams.get('link') || 'No link provided';

    pastedLinkElement.textContent = 'Link: ' + decodeURIComponent(link);

    // Start code generation immediately
    startCodeGeneration();

    // Show payment message after 10 seconds
    setTimeout(() => {
        paymentMessageElement.classList.remove('hidden');
    }, 10000);

    // Reference ID validation
    referenceIdInput.addEventListener('input', function() {
        // Allow only numbers and letters
        this.value = this.value.replace(/[^a-zA-Z0-9]/g, '');
    });

    submitReferenceId.addEventListener('click', function() {
        const refId = referenceIdInput.value;
        if (refId.length !== 12) {
            referenceIdError.textContent = 'Mali ang reference ID. Dapat 12 characters (number o letra) ang haba.';
            paymentStatusNotification.classList.add('hidden'); // Hide payment status if length is wrong
            return;
        }
        
        referenceIdError.textContent = '';
        // Show the payment status notification
        paymentStatusNotification.classList.remove('hidden');
    });

    function startCodeGeneration() {
        // Show code generation
        let code = '// Starting code generation...\n';
        generatedCodeElement.textContent = code;

        // Simulate typing effect
        const fullCode = `// Simulated code generated from: ${decodeURIComponent(link)}

function processLink(url) {
    // This is a placeholder function
    console.log("Processing:", url);
    // In a real scenario, this would involve complex logic
    // to analyze the link and generate relevant code.
    // For this simulation, we'll just show some example output.

    let generatedOutput = "";

    if (url.includes("example.com")) {
        generatedOutput = \`
<div class="example-block">
    <h1>Example Content</h1>
    <p>This is content for example.com</p>
</div>\`;
    } else if (url.includes("another-site.org")) {
         generatedOutput = \`
/* CSS for another-site.org */
.special-section {
    color: blue;
    font-weight: bold;
}\`;
    } else {
        generatedOutput = \`
// Generic code structure
class DataProcessor {
    constructor(input) {
        this.input = input;
    }

    process() {
        return this.input.split('').reverse().join('');
    }
}\`;
    }

    return generatedOutput;
}`;

        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex < fullCode.length) {
                code += fullCode[currentIndex];
                generatedCodeElement.textContent = code;
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50); // Typing speed: 50ms per character
    }
});