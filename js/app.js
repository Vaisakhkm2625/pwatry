const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "/pwatry/images/coffee1.jpg" },
  { name: "Voluptatem", image: "/pwatry/images/coffee2.jpg" },
  { name: "Explicabo", image: "/pwatry/images/coffee3.jpg" },
  { name: "Rchitecto", image: "/pwatry/images/coffee4.jpg" },
  { name: " Beatae", image: "/pwatry/images/coffee5.jpg" },
  { name: " Vitae", image: "/pwatry/images/coffee6.jpg" },
  { name: "Inventore", image: "/pwatry/images/coffee7.jpg" },
  { name: "Veritatis", image: "/pwatry/images/coffee8.jpg" },
  { name: "Accusantium", image: "/pwatry/images/coffee9.jpg" },
]
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("https://vaisakhkm2625.github.io/pwatry/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
