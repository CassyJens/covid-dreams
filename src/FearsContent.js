import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import React from 'react';

const buttonText = "Share Anonymously";
const defaultText = "What do you worry about?";

class FearsContent extends React.Component {
    render () {
        return (
            <div className="appContainer">
                <h2> {defaultText} </h2>
                <TextareaAutosize variant="filled" aria-label="empty textarea" rowsMin={10} />
                <Button variant="contained" className="formButton">
                    {buttonText}
                </Button>
            </div>
        )
    }
}

export default FearsContent;