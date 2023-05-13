import { Dice } from "./Dice/index.js";

const diceRow = document.querySelector("#dice-row");
diceRow.append(
  Dice({ side: "1" }),
  Dice({ side: "2" }),
  Dice({ side: "3" }),
  Dice({ side: "4" }),
  Dice({ side: "5" }),
  Dice({ side: "6" })
);
