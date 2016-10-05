import React from 'react';
import Artwork from './Artwork'
import PlayerPortrait from './PlayerPortrait'

import './GameRound.css'

const GameRound = ({ drawings, playerPortraits }) => (
    <div className="game-round">
        <div className="players">
            {
                playerPortraits.map(playerPortrait => <PlayerPortrait lines={playerPortrait.lines} player={playerPortrait.player}/>)
            }
        </div>
        <div className="drawings">
            {
                drawings.map(drawing => <Artwork lines={drawing.lines} title={drawing.title} player={drawing.player} lies={drawing.lies}/>)
            }
        </div>
    </div>
);

GameRound.propTypes = {
  drawings: React.PropTypes.array.isRequired,
  playerPortraits: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func,
};

export default GameRound;
