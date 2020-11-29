window.addEventListener("DOMContentLoaded", (e) => {
  genrenate("story/1");
});

const host = "https://binaryjazz.us/wp-json/genrenator/v1/";

function genrenate(endpoint) {
  let url = new URL(host + endpoint);
  let xhr = new XMLHttpRequest();

  xhr.open("get", url);
  xhr.send();

  xhr.onload = function () {
    document.getElementById("genre").innerHTML = xhr.responseText;
  };
}
