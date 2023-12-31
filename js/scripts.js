const inputText = document.getElementById("input_text");
const fontsSelect = document.getElementById("fonts-select");
const styledTextArea = document.getElementById("styled_text_area");

inputText.addEventListener("input", function () {
  styledTextArea.value = inputText.value;
});
/*
fontsSelect.addEventListener("change", function () {
  styledTextArea.style.fontFamily = fontsSelect.value;
});
*/

$(".dropdown").click(function () {
  $(this).attr("tabindex", 1).focus();
  $(this).toggleClass("active");
  $(this).find(".dropdown-menu").slideToggle(300);
});
$(".dropdown").focusout(function () {
  $(this).removeClass("active");
  $(this).find(".dropdown-menu").slideUp(300);
});
$(".dropdown .dropdown-menu li").click(function () {
  $(this).parents(".dropdown").find("span").text($(this).text());
  $(this).parents(".dropdown").find("input").attr("value", $(this).attr("id"));
});

$(".dropdown-menu li").click(function () {
  var input = $(this).parents(".dropdown").find("input").val();
  styledTextArea.style.fontFamily = input;
});
