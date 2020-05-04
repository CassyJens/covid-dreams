import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import React from 'react';

const buttonText = "Share Anonymously";
const defaultText = "What do you worry about?";

class FearsContent extends React.Component {
    render () {
        return (
            <div className="appContainer">
                {
                    defaultText.split('\n').map(i => {
                        return <h2>{i}</h2>
                    })
                }
                {/* <TextField variant="filled"></TextField> */}
                <TextareaAutosize variant="filled" aria-label="empty textarea" rowsMin={10} />
                <Button variant="contained" className="formButton">
                    {buttonText}
                </Button>
            </div>
        )
    }
}

export default FearsContent;