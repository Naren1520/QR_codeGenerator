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
}; 
//document.querySelector(".qr_body img")

downloadBtn.addEventListener("click", ()=>{
    let img = document.querySelector(".qr_body img");
    if(img !== null){
        let imgSrc = img.getAttribute("src");
        downloadBtn.setAttribute("href", imgSrc);
    }
    else{
        alert("No QR code found to download");
    }
})
