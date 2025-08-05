const right = document.querySelector(".right");
const top_content = document.querySelector(".top-content"); 

function toggleLayout() {
  
    const w = window.innerWidth;

    if (w <= 1120) {
        right.classList.add("hidden");
        top_content.classList.remove("hidden");
    } else {
        right.classList.remove("hidden");
        top_content.classList.add("hidden");
    }
}

// Run once on page load
toggleLayout();

// Update on resize
window.addEventListener("resize", toggleLayout);