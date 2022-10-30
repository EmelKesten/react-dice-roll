import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../state/playerSlice.js";
import { rollDice } from "./components/rollDice.js";
import { newGame } from "./components/newGame.js";
import { hold } from "./components/hold.js";

function RollDice() {
    const dispatch = useDispatch();
    const player0 = useSelector((state) => state?.player?.appData?.player0);
    const player1 = useSelector((state) => state?.player?.appData?.player1);
    const [dice, setDice] = useState(5);
    const [dice2, setDice2] = useState(5);
    const [winningScore, setWinningScore] = useState();
    const roll = () => {
        const winScore = () => {
            if(winningScore){
                return winningScore;
            }else{
                return 100;
            }
        }
        rollDice(dispatch, addData, player0, player1, setDice, setDice2, winScore());
    };

  return (
    <>
      <button className="btn-new button" onClick={
            () => newGame(dispatch, addData, setDice, setDice2, setWinningScore) 
      }>
        <i className="ion-ios-plus-outline"></i>New game
      </button>
      <button className="btn-roll button" onClick={roll}>
        <i className="ion-ios-loop"></i>Roll dice
      </button>
      <button className="btn-hold button" onClick={
            () => hold(dispatch, addData, player0, player1, setDice, setDice2) 
      }>
        <i className="ion-ios-download-outline"></i>Hold
      </button>

      <input type="text" id="winningScore" placeholder="Final score" onChange={
            (e) => {            
                setWinningScore(e.target.value);
            } 
      }></input>

      <img src={require(`../mainContent/assets/dice-${dice}.png`)} alt="Dice" className="dice" id="dice1"></img>
      <img src={require(`../mainContent/assets/dice-${dice2}.png`)} alt="Dice" className="dice" id="dice2"></img>
    </>
  );
}


export default RollDice;