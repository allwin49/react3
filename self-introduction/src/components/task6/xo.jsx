
import React, { useState } from "react"


import "./xo.css"
function App() {

    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
    const [player, setPlayer] = useState("X")

    const [winner, setWinner] = useState("")


    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    function handleClick(index) {

        if (board[index] !== "" || winner !== "") {
            return
        }

        const newBoard = [...board]
        newBoard[index] = player

        setBoard(newBoard)

        let gameWinner = ""

        for (let pattern of winningPatterns) {
            const [a, b, c] = pattern

            if (
                newBoard[a] !== "" &&
                newBoard[a] === newBoard[b] &&
                newBoard[b] === newBoard[c]
            ) {
                gameWinner = player
                break
            }
        }

        if (gameWinner) {
            setWinner(gameWinner)
        } 
        else if (newBoard.every((cell) => cell !== "")) {
            setWinner("Draw")

        } 
        else {
            setPlayer(player === "X" ? "O" : "X")
        }
    }

    function restartGame() {
        setBoard(["", "", "", "", "", "", "", "", ""])
        setPlayer("X")

        
        setWinner("")
    }

    return (
        <div className="game-container">

            <h1>XO Game</h1>

            <h3>
                {winner
                    ? winner === "Draw"
                        ? "Game Draw!"
                        : `Player ${winner} Wins!`
                    : `Player ${player}'s Turn`}
            </h3>

            <div className="game-board">

                {board.map((value, index) => (
                    <button
                        key={index}


                        className="cell"
                        onClick={() => handleClick(index)}
                    >
                        {value}
                    </button>
                ))}

            </div>

            <button className="restart-btn" onClick={restartGame}>
                Restart Game
                
            </button>

        </div>
    )
}

export default App
