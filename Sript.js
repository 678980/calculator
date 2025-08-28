const screen = document.querySelector(".calc-result");
const buttons = document.querySelectorAll(".calc-btn, .calc-btn-spanned--operator");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "AC") {
      screen.textContent = "";
    } else if (value === "DEl") {
      screen.textContent = screen.textContent.slice(0, -1);
    } else if (value === "=") {
      try {
        screen.textContent = eval(screen.textContent);
      } catch {
        screen.textContent = "Error";
      }
    } else {
      screen.textContent += value;
    }
  });
});