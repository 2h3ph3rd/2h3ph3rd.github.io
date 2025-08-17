let lastPulse = 0;

document.addEventListener("scroll", () => {
  const now = Date.now();
  if (now - lastPulse > 300) {
    lastPulse = now;

    const cards = document.querySelectorAll(".glassy-card");
    const randomCard = cards[Math.floor(Math.random() * cards.length)];

    if (randomCard) {
      randomCard.classList.add("pulse");
      randomCard.addEventListener(
        "animationend",
        () => randomCard.classList.remove("pulse"),
        { once: true },
      );
    }
  }
});
