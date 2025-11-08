import {useState} from "react";

export default function GamePage() {
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);

    const [turn, setTurn] = useState("user1");

    function checkWin(){
        for (let i = 0; i < board.length; i++) {
            if (board[i].every((val) => val==="X") ){
                alert("User1 wins")
            } else if (board[i].every((val) => val==="O")){
                alert("User2 wins")
            }
        }

        for (let i = 0; i < board.length; i++) {
            if ([board[i][0], board[i][1], board[i][2]].every((val) => val==="X")){
                alert("User1 wins")
            } else if ([board[i][0], board[i][1], board[i][2]].every((val) => val==="O")){
                alert("User2 wins")
            }
        }

        if ([board[0][0], board[1][1], board[2][2]].every((val) => val==="X")){
            alert("User1 wins");
        } else if ([board[0][0], board[1][1], board[2][2]].every((val) => val==="O")) {
            alert("User2 wins");
        }

        if ([board[2][0], board[1][1], board[0][2]].every((val) => val==="X")){
            alert("User1 wins");
        } else if ([board[2][0], board[1][1], board[0][2]].every((val) => val==="O")) {
            alert("User2 wins");
        }
    }

    function clickCellBoard(i: number, j : number) {
        console.log(board[i][j]);
        setBoard(prev =>{
            if (prev[i][j]) return prev;

            const symbol = turn === "user1" ? "X" : "O";
            const nextTurn = turn === "user1" ? "user2" : "user1";

            prev[i][j] = symbol;

            const next = prev.slice();
            const nextRow = prev[i].slice();
            nextRow[j] = symbol;
            next[i] = nextRow;

            setTurn(nextTurn)
            checkWin();
            return next;
        })
    }

    return (
        <div className="bg-gray-900 h-90 w-90 mt-62">
            {board.map((row, i) => (
                <div key={i.toString()} className="flex justify-center items-center">
                    {row.map((cell, j) => (
                        <button
                            key={`${i}-${j}`}
                            onClick={() => clickCellBoard(i, j)}
                            className="bg-gray-700 w-30 h-29 mr-1 mt-1 ml-1 text-white text-9xl flex justify-center items-center"
                        >
                            {cell}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    )
}