const qrInput = document.getElementById('qr-input');
const qrImage = document.getElementById('qr-image');
const generateButton = document.getElementById('generate-button');
const downloadButton = document.getElementById('download-button'); 
const clearInputButton = document.getElementById('clear-input');
let initialQRData = "Anti ra am type chayakuda scan chasathunavu musukoniii type chasii scan chayii";
let qrData = initialQRData;
let qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}&size=150x150`;


function generateQRCode() {
    const inputValue = qrInput.value.trim();
    if (inputValue !== "") {
        qrData = inputValue;
    } else {
        qrData = initialQRData;
    }
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}&size=150x150`;
    qrImage.src = qrCodeUrl;
}

function downloadQRCode() {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function() {
        const blob = xhr.response;
        const a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = "qrcode.png";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    xhr.open('GET', qrImage.src);
    xhr.send();
}
clearInputButton.addEventListener('click', function() {
    qrInput.value = "";
    qrImage.src = qrCodeUrl;
});
generateButton.addEventListener('click', generateQRCode);
qrInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        generateQRCode();
    }
});

downloadButton.addEventListener('click', downloadQRCode); 
generateQRCode();
