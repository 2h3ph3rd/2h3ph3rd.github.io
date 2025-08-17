function typeLine(element, text, callback) {
  let i = 0;

  // create blinking cursor
  const cursor = document.createElement("span");
  cursor.textContent = "|";
  cursor.className = "cursor";
  element.appendChild(cursor);

  function typeChar() {
    if (i < text.length) {
      cursor.insertAdjacentText("beforebegin", text[i]);
      i++;
      setTimeout(typeChar, 20 + Math.random() * 20);
    } else {
      cursor.remove(); // remove cursor after typing this line
      if (callback) callback();
    }
  }

  typeChar();
}

// select all lines
const typedElements = document.querySelectorAll(".typed");

function typeLines(index = 0) {
  if (index >= typedElements.length) return;
  const el = typedElements[index];
  const text = el.dataset.text;
  typeLine(el, text, () => typeLines(index + 1));
}

typeLines();
