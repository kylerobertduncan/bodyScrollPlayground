document.getElementById("toTop").addEventListener("click", () => {
  window.scroll({
    behaviour: 'smooth',
    top: 0
  });
});

function shrinkMap() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    console.log("shrinking!");
    const map = document.querySelector(".map");
    map.setAttribute("height", "25%");
  }
  if (document.body.scrollTop < 150 || document.documentElement.scrollTop < 150) {
    console.log("shrinking!");
    const map = document.querySelector(".map");
    map.setAttribute("height", "50%");
  }
}
window.onscroll = () => shrinkMap();
