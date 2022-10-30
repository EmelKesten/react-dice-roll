export const newGame = (dispatch, addData, setDice, setDice2) => {
    dispatch(
        addData({
            player0: {
                name: "Player 1",
                score: 0,
                currentScore: 0,
                isActive: true,
                isWinner: false,
            },
            player1: {
                name: "Player 2",
                score: 0,
                currentScore: 0,
                isActive: false,
                isWinner: false,
            },
        })
    );
    setDice(5);
    setDice2(5);
}