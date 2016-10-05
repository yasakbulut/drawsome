import React from 'react';
import Drawing from './Drawing'

import './PlayerPortrait.css'

const PlayerPortrait = ({ lines, player, onClick }) => (
    <div className="player-portrait">
      <Drawing lines={lines}/>
      <div className="metadata"><strong>{player.name.toLowerCase()}</strong></div>
    </div>
);

PlayerPortrait.propTypes = {
  lines: React.PropTypes.array.isRequired,
  player: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func,
};

export default PlayerPortrait;
