let label = document.getElementById("count");

let count = label.innerHTML;
count = parseInt(count);

function toplama() {
  count++;
  document.getElementById("count").innerHTML = count;
}

let increase = document.getElementById("decrease");
increase.onclick = function () {
  count--;
  label.innerHTML = count;
};

let reset = document.getElementById("reset");

function Reset() {
  count = 0;
  label.innerHTML = count;
}
