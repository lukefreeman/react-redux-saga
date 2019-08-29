import React from 'react'

import '../sass/components/_panel.scss';

const Panel = (props) => {
    return (
        <div className="component_panel">
            <span>{props.id}</span>
        </div>
    )
}

export default Panel;