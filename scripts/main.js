function createGrid(size = 16) {
  const grid = document.createElement("div");
  grid.className = "grid";

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.className = "row";

    for (let i = 0; i < size; i++) {
      const square = document.createElement("div");
      square.className = "square";
      square.addEventListener(
        "mouseenter",
        () => (square.style.backgroundColor = "lightgray")
      );
      row.appendChild(square);
    }

    grid.appendChild(row);
  }

  return grid;
}

const container = document.querySelector(".container");
container.appendChild(createGrid());

function clear() {
  document.querySelectorAll(".square").forEach((square) => {
    square.style.backgroundColor = "white";
  });

  let size = prompt("Enter size of grid (less than 100): ");
  if (size > 100) {
    alert("That size is too large. Please try again!");
    size = 16;
  }
  container.querySelector(".grid").replaceWith(createGrid(size));
}

const clearButton = document.createElement("button");
clearButton.id = "clearButton";
clearButton.textContent = "Clear";
clearButton.addEventListener("click", clear);
container.insertBefore(clearButton, container.firstChild);
