const qrText = document.querySelector("#text_input");
const qrContainer = document.querySelector(".qr_body");
const generateBtn = document.querySelector("#generate");
const downloadBtn = document.querySelector("#download");
const qrSize = document.querySelector("#sizes");

generateBtn.addEventListener("click", (e)=>{
    e.preventDefault();         //prevents default submission or refreshing
    if(qrText.value.length > 0){
        generateQRCode();
    }
    else{
        alert("Please enter a valid text or URL");
    }
}) 

qrSize.addEventListener("change", (e) => {
    size = e.target.value;
    if(qrText.value.length > 0){
        generateQRCode();
    }
    else{
        alert("Please enter a text or URL");
    }
});


function generateQRCode(){
    qrContainer.innerHTML = ""; //clears the previous QR code
    new QRCode(qrContainer, {
        text: qrText.value,
        height: qrSize.value,
        width: qrSize.value,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });

    setTimeout(() => {
        let img = qrContainer.querySelector('img');
        if(img){
            downloadBtn.setAttribute('href', img.src);
            downloadBtn.setAttribute('download', 'N_QRCode.png');
        } else {
            let canvas = qrContainer.querySelector('canvas');
            if(canvas){
                downloadBtn.setAttribute('href', canvas.toDataURL("image/png"));
                downloadBtn.setAttribute('download', 'N_QRCode.png');
            }
        }
    }, 300); // wait for QRCode to render
}

downloadBtn.addEventListener('click', (e)=>{
    let href = downloadBtn.getAttribute('href');
    if(!href){
        e.preventDefault();
        alert("Please generate a QR code first!");
    }
});



