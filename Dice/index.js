export const Dice = (props) => {
  const { side } = props;
  const diceElm = document.createElement("div");
  diceElm.classList.add("dice");
  diceElm.innerHTML = `
       <div class="dice__side dice__side--${side}"></div>
      <button class="btn btn--small roll-btn">hodit</button>
      `;

  const roll = () => {
    return Math.floor(Math.random() * 6) + 1;
  };
  diceElm.querySelector(".roll-btn").addEventListener("click", () => {
    diceElm.replaceWith(
      Dice({
        side: roll(),
      })
    );
  });
  return diceElm;
};
