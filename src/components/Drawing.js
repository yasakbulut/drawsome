import React from 'react';

const Drawing = ({lines, onClick}) => (
    <svg version="1.1"
         baseProfile="full"
         width="250"
         height="300"
         xmlns="http://www.w3.org/2000/svg"
    >
        {
            lines.map(line => line.points.map(
                point => <circle cx={point.x} cy={point.y} r={line.thickness / 2} fill={line.color} />))
        }
        {
            lines.map(line => <polyline fill="none"
                                        strokeLinecap="round"
                                        stroke={line.color}
                                        strokeLinejoin="round"
                                        strokeWidth={line.thickness}
                                        points={line.points.reduce((acc, point) => {acc.push(point.x + ' ' + point.y);return acc}, []).join(", ")}/>)
        }
    </svg>
);

Drawing.propTypes = {
    lines: React.PropTypes.array.isRequired,
    onClick: React.PropTypes.func,
};

export default Drawing;
