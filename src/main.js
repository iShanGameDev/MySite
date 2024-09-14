
const hamBurger = document.querySelector(".toggle-btn");
hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
  document.querySelector("#mainBody").classList.toggle("expand");
});

let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);


const hombtn = document.querySelector("#home-btn");
const rbtn = document.querySelector("#resume-btn");
const pbtn = document.querySelector("#portfolio-btn");
const prbtn = document.querySelector("#project-btn");
const cbtn = document.querySelector("#contact-btn");

hombtn.addEventListener("click", function () {
  var s = "activePannel";
  if (pbtn.classList.contains(s) || prbtn.classList.contains(s) || cbtn.classList.contains(s) || rbtn.classList.contains(s)) {
    rbtn.classList.remove(s);
    pbtn.classList.remove(s);
    prbtn.classList.remove(s);
    cbtn.classList.remove(s);
  }
  hombtn.classList.toggle(s);
  window.scrollTo(0, 0)

});
rbtn.addEventListener("click", function () {
  var s = "activePannel";
  if (hombtn.classList.contains(s) || prbtn.classList.contains(s) || cbtn.classList.contains(s) || pbtn.classList.contains(s)) {
    hombtn.classList.remove(s);
    pbtn.classList.remove(s);
    prbtn.classList.remove(s);
    cbtn.classList.remove(s);
  }
  rbtn.classList.toggle(s);
  window.scrollTo(0, (scrollHeight / 4) / 1.3)

});
pbtn.addEventListener("click", function () {
  var s = "activePannel";
  if (hombtn.classList.contains(s) || prbtn.classList.contains(s) || cbtn.classList.contains(s) || rbtn.classList.contains(s)) {
    hombtn.classList.remove(s);
    rbtn.classList.remove(s);
    prbtn.classList.remove(s);
    cbtn.classList.remove(s);
  }
  pbtn.classList.toggle(s);
  window.scrollTo(0, (scrollHeight / 4) * 1.5)

});


prbtn.addEventListener("click", function () {
  var s = "activePannel";
  if (hombtn.classList.contains(s) || rbtn.classList.contains(s) || cbtn.classList.contains(s) || pbtn.classList.contains(s)) {
    hombtn.classList.remove(s);
    pbtn.classList.remove(s);
    rbtn.classList.remove(s);
    cbtn.classList.remove(s);
  }
  prbtn.classList.toggle(s);
  window.scrollTo(0, (scrollHeight / 4) * 1.85)
});


cbtn.addEventListener("click", function () {
  var s = "activePannel";
  if (hombtn.classList.contains(s) || prbtn.classList.contains(s) || rbtn.classList.contains(s) || pbtn.classList.contains(s)) {
    hombtn.classList.remove(s);
    pbtn.classList.remove(s);
    prbtn.classList.remove(s);
    rbtn.classList.remove(s);
  }
  cbtn.classList.toggle(s);
  window.scrollTo(0, scrollHeight)
});

async function Pageheightloop() {
  var s = "activePannel";
  while (true) {
    await new Promise(resolve => setTimeout(resolve, 150));
    var val = scrollHeight;
    var valData = val / 5;
    console.log(val + " " + valData)
    if (window.scrollY <= valData / 10) {
      hombtn.classList.add(s);
      rbtn.classList.remove(s);
      pbtn.classList.remove(s);
      prbtn.classList.remove(s);
      cbtn.classList.remove(s);

    } else if (window.scrollY <= valData) {
      hombtn.classList.remove(s);
      rbtn.classList.add(s);
      pbtn.classList.remove(s);
      prbtn.classList.remove(s);
      cbtn.classList.remove(s);
    } else if (window.scrollY <= valData * 2) {
      hombtn.classList.remove(s);
      rbtn.classList.remove(s);
      pbtn.classList.add(s);
      prbtn.classList.remove(s);
      cbtn.classList.remove(s);
    } else if (window.scrollY <= valData * 2.5) {
      hombtn.classList.remove(s);
      rbtn.classList.remove(s);
      pbtn.classList.remove(s);
      prbtn.classList.add(s);
      cbtn.classList.remove(s);
    } else if (window.scrollY <= valData * 3) {
      hombtn.classList.remove(s);
      rbtn.classList.remove(s);
      pbtn.classList.remove(s);
      prbtn.classList.remove(s);
      cbtn.classList.add(s);
    }
  }
}
Pageheightloop();