const p = document.getElementById("demo")
const b = document.getElementById("button")

b.addEventListener("click", () => {
  p.innerHTML = "Changed!"
})