import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import React from 'react';
// require('firebase/firestore');

const buttonText = "Share Anonymously";
const defaultText = "What do you hope for?";

class HopesContent extends React.Component {

    constructor (props) {
        super(props);
        
        this.state = {
            comment:  'Share your thoughts here.'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount () {
        // eslint-disable-next-line no-undef
        firebase.firestore().collection('hopes').get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {

                // test that we have data
                console.log("document ID is ", doc.id);
                console.log("document data is", doc.data());
              
            });
        });
    }

    handleChange(e) {
        this.setState({comment: e.target.value});
    }

    handleSubmit (e) {
        e.preventDefault();

        var userInput = this.state.comment;

        // save to database
        // eslint-disable-next-line no-undef
        firebase.firestore().collection('hopes').doc().set({
            comment: userInput,
            // eslint-disable-next-line no-undef
            timestamp: firebase.firestore.Timestamp.now()
        });

        // update the UI

    }

    render () {
        return (
            <div className="appContainer">
                <h2> {defaultText} </h2>
                <form onSubmit={this.handleSubmit}>
                    <TextareaAutosize 
                        variant="filled" 
                        aria-label="empty textarea" 
                        rowsMin={10} 
                        value={this.state.comment}
                        onChange={this.handleChange} />
                    <input type="submit" value={buttonText} />
                </form>
            </div>
        )
    }
}

export default HopesContent;