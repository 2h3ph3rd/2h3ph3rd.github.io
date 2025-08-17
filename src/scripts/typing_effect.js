document.addEventListener("DOMContentLoaded", () => {
  const typedElements = Array.from(document.querySelectorAll(".typed"));

  let timeouts = [];

  function typeLine(element, text, callback) {
    let i = 0;
    const cursor = document.createElement("span");
    cursor.textContent = "|";
    cursor.className = "cursor";
    element.appendChild(cursor);

    function typeChar() {
      if (i < text.length) {
        cursor.insertAdjacentText("beforebegin", text[i]);
        i++;
        timeouts.push(setTimeout(typeChar, 13 + Math.random() * 20));
      } else {
        cursor.remove();
        if (callback) callback();
      }
    }

    typeChar();
  }

  // Sequential typing for multiple lines
  function typeLinesSequential(index = 0) {
    if (index >= typedElements.length) return;
    const el = typedElements[index];
    typeLine(el, el.dataset.text, () => typeLinesSequential(index + 1));
  }

  // Scroll observer to restart typing in order
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Only trigger when the first line enters viewport
          if (entry.target === typedElements[0]) {
            // Clear all lines
            typedElements.forEach((el) => (el.textContent = ""));
            timeouts.forEach((timeout) => clearTimeout(timeout));
            timeouts = [];
            typeLinesSequential(); // start typing sequentially
          }
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  // Observe only the first element for triggering restart
  observer.observe(typedElements[0]);
});
