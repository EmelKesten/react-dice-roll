export const hold = (dispatch, addData, player0, player1) => {
    if (player0.isActive) {
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