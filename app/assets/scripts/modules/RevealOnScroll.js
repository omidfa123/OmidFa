class RevealOnScroll {
  constructor() {
    this.itemsToReveal = document.querySelectorAll(".feature-item")
    this.hideInitially()
    this.events()
  }

  events() {
    window.addEventListener("scroll", () => {
      this.itemsToReveal.forEach(el => {
        this.calculateIfScrolledTo(el)
      })
    })
  }

  calculateIfScrolledTo(el) {
    let scrollPercent = (el.getBoundingClientRect().top / window.innerHeight) * 100
    if (scrollPercent < 75) {
      el.classList.add("reveal-item--is-visible")
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
  }
}

export default RevealOnScroll