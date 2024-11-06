import React, { useState } from 'react';

import { MdKeyboardArrowLeft } from "react-icons/md";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    const [hovered, setHovered] = useState(false);
    return (
        <MdKeyboardArrowLeft
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={className}
            style={{
                ...style,
                padding: '6px',
                color: hovered ? 'red' : 'black',

                fontSize: '8px',  // Change arrow size
            }}
            onClick={onClick}
        />
    );
}

export default SamplePrevArrow;
