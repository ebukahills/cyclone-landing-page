const modal = document.getElementById("modal")
const closeModal = document.getElementById("close")
const joinWaitlist = document.querySelectorAll(".join-waitlist")

joinWaitlist.forEach(btn =>
  btn.addEventListener("click", () => {
    modal.showModal()
  }))

closeModal.addEventListener("click", () => {
  modal.close()
})

// This prevents iOS zoom on focused form elements with font size smaller than 16px.
// iOS 10+ allows pinch-zoom even if viewport is unscalaeable.
// We feature detect those browsers and apply additional rules.
if (
  window.CSS?.supports?.(
    '(font:-apple-system-body) and (-webkit-touch-callout:none) and (-webkit-tap-highlight-color:hotpink)'
  )
) {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport !== null) {
    viewport.content = `${viewport.content},user-scalable=no`;
  }
}