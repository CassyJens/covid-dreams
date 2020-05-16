import React from 'react';
import App from './App.js';
import './App.css';

// Landing page has an enter button
// When Enter button is clicked, render the actual app.

function LandingPage() {

  const [isEntered, setIsEnteredValue] = React.useState(false);

  const handleEnter = (event, newValue) => {
      setIsEnteredValue(true);
  };

  function Greeting () {
    return <div>
              <h1> A Place for Thoughts and Things </h1>
              <h2   className="clickableHeader" 
                    onClick={handleEnter}> 
                    Enter 
              </h2>
          </div> 

}

  var content = Greeting();

  if (isEntered) {
      content = <App />;
  }

  return (
    <div className="App">
      { content }
    </ div>
  );
}
export default LandingPage;
