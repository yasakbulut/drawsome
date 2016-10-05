import React from 'react';
import Drawing from './Drawing'

import './Artwork.css'

const Artwork = ({ lines, title, player, lies, onClick }) => (
    <div className="artwork">
      <div className="drawing">
        <Drawing lines={lines}/>
        <div className="metadata"><strong>{title.text.toLowerCase()}</strong> by <span>{player.name.toLowerCase()}</span></div>
      </div>
      <div className="lies">
        <ul>
          {
              lies.map(lie => <li><strong>{lie.text.toLowerCase()}</strong> by <span>{lie.player.name.toLowerCase()}</span></li>)
          }
        </ul>
      </div>
    </div>
);

Artwork.propTypes = {
  lines: React.PropTypes.array.isRequired,
  title: React.PropTypes.object.isRequired,
  player: React.PropTypes.object.isRequired,
  lies: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func,
};

export default Artwork;
