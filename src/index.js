const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  number = document.querySelector(".number");

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handlePlus = () => {
  count += 1;
  updateText();
};
const handleMinus = () => {
  count -= 1;
  updateText();
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
