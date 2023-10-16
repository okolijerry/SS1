window.addEventListener("scroll", () => {
  document.querySelector("footer").classList.toggle('window-scroll', window.scrollY < 0)
})