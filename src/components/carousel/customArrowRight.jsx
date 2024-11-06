import React, { useState } from 'react';

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    const [hovered, setHovered] = useState(false);
    return (
        <MdOutlineKeyboardArrowRight
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={className}
            style={{
                ...style,
                padding: '6px',
                color: hovered ? 'red' : 'black',// Change arrow color
                fontSize: '8px',  // Change arrow size

            }
            }
            onClick={onClick}
        />
    );
}

export default SampleNextArrow;
