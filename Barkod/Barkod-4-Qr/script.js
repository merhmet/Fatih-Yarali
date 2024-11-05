const imgContainerEl = document.getElementById('code-container');
const linkEl = document.getElementById('link');
const sizeEl = document.getElementById('size');
const mainColorEl = document.getElementById('main-color');
const bgColorEl = document.getElementById('bg-color');
let mainColor = 'rgb(0,0,0)';
let bgColor = 'rgb(255,255,255)';

function generateQrCode() {
  imgContainerEl.innerHTML = '';
  new QRCode(imgContainerEl, {
    text: linkEl.value,
    width: sizeEl.value,
    height: sizeEl.value,
    colorDark: mainColor,
    colorLight: bgColor });

}

new Picker({
  parent: mainColorEl,
  popup: 'bottom',
  color: mainColor,
  alpha: false,
  onChange: ({ rgbString }) => {
    mainColor = rgbString;
    generateQrCode();
  } });


new Picker({
  parent: bgColorEl,
  popup: 'bottom',
  color: bgColor,
  alpha: false,
  onChange: ({ rgbString }) => {
    bgColor = rgbString;
    generateQrCode();
  } });


sizeEl.addEventListener('change', generateQrCode);
linkEl.addEventListener('blur', generateQrCode);