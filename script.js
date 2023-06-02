const chessBoard = [];
for (let i = 0; i < 8; i++) {
	chessBoard[i] = [];
}

const addMove = (x, y, score) =>{
    if(x >= 0 && y >= 0 && x <= 7 && y <= 7 && chessBoard[x][y] == null){
        chessBoard[x][y] = score;
    }
}

const addAllMoves = (x, y, score) => {
    addMove(x + 2, y + 1, score);
    addMove(x + 1, y + 2, score);
    addMove(x - 2, y + 1, score);
    addMove(x - 2, y - 1, score);
    addMove(x - 1, y + 2, score);
    addMove(x - 1, y - 2, score);
    addMove(x + 2, y - 1, score);
    addMove(x + 1, y - 2, score);
}

const addAllPossible = (score) => {
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			if (chessBoard[i][j] === score) {
				addAllMoves(i, j, score + 1);
			}
		}
	}
};

const findShortestPath= (startX, startY, endX, endY) =>{
    addMove(startX, startY, 0);
    let count = 0;
    do{
        addAllPossible(count++);
    }while(chessBoard[endX][endY] == null)
    return chessBoard[endX][endY]
}