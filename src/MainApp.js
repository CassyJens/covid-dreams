import React from 'react';

function MainApp (props) {
    
    return (
        <div className="appContainer">
            {props.content}
        </div>
    );
}

export default MainApp;