function next(n) {
  document.getElementById("p" + n).classList.add("hidden");
  document.getElementById("p" + (n + 1)).classList.remove("hidden");
}

function yes() {
  document.getElementById("p6").classList.add("hidden");
  document.getElementById("yes").classList.remove("hidden");
}

function maybe() {
  document.getElementById("p6").classList.add("hidden");
  document.getElementById("maybe").classList.remove("hidden");
}

function surprise() {
  document.getElementById("yes")?.classList.add("hidden");
  document.getElementById("maybe")?.classList.add("hidden");
  document.getElementById("surprise").classList.remove("hidden");
}
