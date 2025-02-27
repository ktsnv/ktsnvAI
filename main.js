function getForm() {
  const container = document.querySelector("#frame");
  var prompt = document.getElementById("text").value;
  var image = document.getElementById("image").checked;
  var result;
  if (image) {
    result = aiImage(prompt);
  }
  else {
    result = aiText(prompt);
  }
  const br = document.createElement("br");
  const embed = document.createElement('embed');
  container.append(br);
  embed.setAttribute('src',result);
  container.append(embed);
}
function aiText(prompt) {
  return "https://text.pollinations.ai/prompt/"+encodeURIComponent(prompt);
}
function aiImage(prompt) {
  return "https://image.pollinations.ai/prompt/"+encodeURIComponent(prompt);
}
