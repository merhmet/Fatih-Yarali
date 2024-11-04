JsBarcode("#barcode", "Hi!");

const entry = document.querySelector("#entry");
const printButton = document.querySelector("#print-button");

entry.focus();

let text = "";

entry.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    JsBarcode("#barcode", "Hi!");
  }
  text = e.target.value;
  JsBarcode("#barcode", text);
});

printButton.addEventListener("click", () => {
  printJS("barcode", "html");
});