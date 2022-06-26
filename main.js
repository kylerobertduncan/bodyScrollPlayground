document.getElementById("toTop").addEventListener("click", () => {
  window.scroll({
    behaviour: 'smooth',
    top: 0
  });
});

function shrinkMap() {
  if (document.body.scrollTop > 150) {
    const map = document.querySelector(".map");
    const diff = document.body.scrollTop - 150;
    map.style.height = `calc(50% - ${diff})`;
  } 
}
window.onscroll = () => shrinkMap();
