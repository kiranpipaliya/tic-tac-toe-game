import React, { useState } from 'react';
import './TicTacToe.scss';
import Winner from './Winner';
import { ICON } from '../constant/icons';

const winnerCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const initialState = {
    player: 'X',
    data: Array(9).fill(null),
};

const TicTacToe = () => {
    const [gameConfig, setGameConfig] = useState(initialState);
    const checkWinner = () => {
        for (const logic of winnerCondition) {
            const [a, b, c] = logic;
            if (
                gameConfig.data[a] &&
                gameConfig.data[a] === gameConfig.data[b] &&
                gameConfig.data[a] === gameConfig.data[c]
            ) {
                return gameConfig.data[a];
            }
        }
        return null;
    };
    const toggle = (e, index) => {
        if (gameConfig.player === 'X' && gameConfig.data[index] === null) {
            setGameConfig((prev) => {
                return {
                    ...prev,
                    data: [
                        ...prev.data.slice(0, index),
                        'X',
                        ...prev.data.slice(index + 1),
                    ],
                    player: 'O',
                };
            });
        }

        if (gameConfig.player === 'O' && gameConfig.data[index] === null) {
            setGameConfig((prev) => {
                return {
                    ...prev,
                    data: [
                        ...prev.data.slice(0, index),
                        'O',
                        ...prev.data.slice(index + 1),
                    ],
                    player: 'X',
                };
            });
        }
    };

    const reset = () => {
        setGameConfig(initialState);
    };

    const isBoardFull = () => {
        return gameConfig.data.every((item) => item !== null);
    };

    const isWinner = checkWinner();
    const isDraw = isBoardFull() && !isWinner;

    return (
        <div className="container">
            <h1 className="title">
                Tic Tac Toe Game In <span>React</span>
            </h1>
            {!isWinner && !isDraw && (
                <div className="board">
                    {gameConfig.data.map((item, index) => (
                        <div
                            key={index}
                            className="board__box"
                            onClick={(e) => toggle(e, index)}
                        >
                            {item && <img src={ICON[item]} alt={item} />}
                        </div>
                    ))}
                </div>
            )}
            {(isWinner || isDraw) && (
                <Winner isDraw={isDraw} winner={isWinner} />
            )}
            <button onClick={reset} className="reset">
                Reset
            </button>
        </div>
    );
};

export default TicTacToe;
