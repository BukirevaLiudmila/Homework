$(document).ready(function() {
  SetBg();
  $("#container").draggable();
  $("#editor").keyup(function() {
    SetBg();
  });
});

function SetBg() {
  const entered = $("#editor").val();
  const svgData = escapeHtml(entered);
  const result = "background-image: url(\"data:image/svg+xml," + svgData + "\");";
  $("body").attr("style", result);
}

function escapeHtml(st) {
  return st
    .replace(/#/g, "%23")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E")
    .replace(/"/g, "'")
    .replace(/\s{2,}/g, " ")
}
