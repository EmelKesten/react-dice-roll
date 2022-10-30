export const rollDice = (
  dispatch,
  addData,
  player0,
  player1,
  setDice,
  setDice2, 
  winningScore
) => {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  setDice(dice1);
  setDice2(dice2);
  if (dice1 !== 1 && dice2 !== 1) {
    if (player0?.isActive) {
      dispatch(
        addData({
          player0: {
            ...player0,
            score: player0.score + dice1 + dice2,
            currentScore: dice1 + dice2,
          },
          player1: {
            ...player1,
          },
        })
        );
        if(player0.score + dice1 + dice2 >= winningScore){
            dispatch(
                addData({
                    player0: {
                        ...player0,
                        isWinner: true,
                    },
                    player1: {
                        ...player1,
                    },
                })
            );
        }
    } else {
      dispatch(
        addData({
          player0: {
            ...player0,
          },
          player1: {
            ...player1,
            score: player1.score + dice1 + dice2,
            currentScore: dice1 + dice2,
          },
        })
      );
        if(player1.score + dice1 + dice2 >= winningScore){
            dispatch(
                addData({
                    player0: {
                        ...player0,
                    },
                    player1: {
                        ...player1,
                        isWinner: true,
                    },
                })
            );
        }
    }
  } else {
    if (player0?.isActive) {
      dispatch(
        addData({
          player0: {
            ...player0,
            currentScore: 0,
            isActive: false,
          },
          player1: {
            ...player1,
            isActive: true,
          },
        })
      );
    } else {
      dispatch(
        addData({
          player0: {
            ...player0,
            isActive: true,
          },
          player1: {
            ...player1,
            currentScore: 0,
            isActive: false,
          },
        })
      );
    }
  }
};
