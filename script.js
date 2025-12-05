let counter = 0;

function updateCounter() {
  counter++;
  document.getElementById("counter").textContent =
    "عدد المحاولات: " + counter;
}

function startTasmii() {
  updateCounter();
  document.getElementById("main-content").style.display = "none";
  document.getElementById("popup").style.display = "block";
}

function startListening() {
  updateCounter();
  alert("ابدئي التسجيل الآن للاستماع لتلاوتك ✔️");
}

function answerYes() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("success-message").style.display = "block";
}

function answerNo() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}