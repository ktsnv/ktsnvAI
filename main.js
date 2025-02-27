function getForm(event) {
  event.preventDefault();
  var prompt = document.getElementById("prompt").value;
  var image = document.getElementById("image").value;
  var result;
  if (image) {
    result = aiImage(prompt);
  }
  else {
    result = aiText(prompt);
  }
}
function aiText(prompt) {
  return "https://text.pollinations.ai/prompt/"+encodeURIComponent(prompt);
}
function aiImage(prompt) {
  return "https://image.pollinations.ai/prompt/"+encodeURIComponent(prompt);
}
