window.onload = function () {
  if (!localStorage.getItem("noticeClosed")) {
    document.getElementById("noticeBoard").style.display = "block";
  }
};

document.getElementById("closeNotice").onclick = function () {
  document.getElementById("noticeBoard").style.display = "none";
  localStorage.setItem("noticeClosed", true);
};
