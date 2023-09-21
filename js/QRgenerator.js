// // Initial text for the QR code
// var initialText = "f*ck u b**ch";

// // Function to generate and update the QR code
// function updateQRCode() {
//     var urlInput = document.getElementById('urlInput').value;
//     var qrcode = new QRCode(document.getElementById('qrcode'), {
//         text: urlInput || initialText,
//         width: 128,
//         height: 128
//     });
// }
const qrInput = document.getElementById('qr-input');
const qrImage = document.getElementById('qr-image');
const generateButton = document.getElementById('generate-button');

// Initial QR code data
let initialQRData = "https://www.example.com";
let qrData = initialQRData;

// Function to generate and display the QR code
function generateQRCode() {
    const inputValue = qrInput.value.trim();
    if (inputValue !== "") {
        qrData = inputValue;
    } else {
        qrData = initialQRData; // Revert to initial data if input is empty
    }
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}&size=150x150`;
    qrImage.src = qrCodeUrl;
}

generateButton.addEventListener('click', generateQRCode);
qrInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        generateQRCode();
    }
});

// Generate the initial QR code
generateQRCode();
