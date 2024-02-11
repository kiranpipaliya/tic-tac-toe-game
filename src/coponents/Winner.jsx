// WinnerComponent.js
import React from 'react';
import './Winner.scss';
import { ICON } from '../constant/icons';

const Winner = ({ winner, isDraw }) => {
    return (
        <div className="winner-container">
            {winner && !isDraw && (
                <>
                    <h2>Player {winner} wins!</h2>
                    <img src={ICON[winner]} alt={winner} />
                </>
            )}
            {isDraw && (
                <>
                    <h2>It's a Draw!'</h2>
                    <div className="draw">
                        <img src={ICON['X']} alt="X" />
                        <img src={ICON['O']} alt="O" />
                    </div>
                </>
            )}
        </div>
    );
};

export default Winner;
