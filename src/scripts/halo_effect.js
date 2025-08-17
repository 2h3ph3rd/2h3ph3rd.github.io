const haloContainer = document.getElementById("cursor-halo-container");
let mouseX = 0,
  mouseY = 0;
let haloX = 0,
  haloY = 0;
let angle = 0;
let active = false;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Hide halo if the target or any parent has .no-halo
  const target = e.target;
  if (target && target.closest && target.closest(".no-halo")) {
    if (active && haloContainer) {
      haloContainer.style.opacity = "0";
      active = false;
    }
  } else {
    if (!active && haloContainer) {
      haloContainer.style.opacity = "1";
      active = true;
    }
  }
});

function animate() {
  if (active) {
    haloX += (mouseX - haloX) * 0.15;
    haloY += (mouseY - haloY) * 0.15;

    if (!haloContainer) return;

    const offsetX = Math.sin(angle) * 8;
    const offsetY = Math.cos(angle) * 8;
    angle += 0.05;

    haloContainer.style.transform = `translate(${haloX - 40 + offsetX}px, ${haloY - 40 + offsetY}px)`;
  }
  requestAnimationFrame(animate);
}

animate();
