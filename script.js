const inp = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("ul");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerHTML = " &#10006 ";
  span.className = "close";

  li.innerText = inp.value;
  li.appendChild(span);

  list.appendChild(li);
  //   list.appendChild(span);

  inp.value = "";

  var sp = document.querySelectorAll(".close");
  // console.log(sp);
  for (let i = 0; i < sp.length; i++) {
    sp[i].addEventListener("click", function (e) {
      this.parentElement.style.display = "none";
    });
  }
});
