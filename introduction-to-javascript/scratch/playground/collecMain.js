function upDate(previewPic) {
  const displayPic = document.getElementById("display-container");
  displayPic.style.backgroundImage = `url(${previewPic.src})`;
}

function unDo() {
  const unDoPic = document.getElementById("display-container");
  unDoPic.style.backgroundImage = `url(${""})`;
}
