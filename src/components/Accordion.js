

import { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowDownCircleFill } from 'react-icons/bs';

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span>
            {isExpanded ? <BsArrowLeftCircleFill /> : <BsArrowDownCircleFill />}
        </span>

        return (
            <div key={item.id}>
                <div onClick={() => setExpandedIndex(index)}>
                    {icon}
                    {item.label}
                </div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });

    return (
        <div>{renderedItems}</div>

    );
}


export default Accordion;