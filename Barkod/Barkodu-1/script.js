const btn = document.querySelector(".btn");
const input = document.querySelector("input");
input.focus();

btn.addEventListener("click", () => {
	JsBarcode(".code", input.value, {
		format: "code128",
		displayValue: true,
		fontSize: 24,
		lineColor: "#000"
	});

	// input.value = "";
	input.focus();
	input.select();
});