const inputText = document.getElementById("input_text");
const fontsSelect = document.getElementById("fonts-select");
const styledTextArea = document.getElementById("styled_text_area");

inputText.addEventListener("input", function () {
  styledTextArea.value = inputText.value;
});

fontsSelect.addEventListener("change", function () {
  styledTextArea.style.fontFamily = fontsSelect.value;
});
