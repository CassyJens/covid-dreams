import React from 'react';
import './App.css';
import MainApp from './MainApp';
import HopesContent from './HopesContent';
import FearsContent from './FearsContent';

function App() {

  const [leftClicked, setLeftClicked] = React.useState(false);
  const [rightClicked, setRightClicked] = React.useState(false);

  const handleLeftClicked = (event, newValue) => {
    setLeftClicked(true);
  }

  const handleRightClicked = (event, newValue) => {
    setRightClicked(true);
  }

  function LeftContent() {
    return <div className="categoryDiv" onClick={handleLeftClicked}><h1 className="clickableHeader"> Hopes </h1></div>;
  }

  function RightContent () {
    return <div className="categoryDiv" onClick={handleRightClicked}><h1 className="clickableHeader"> Fears </h1></div>;
  }

  function handleBackClick () {
    setLeftClicked(false);
    setRightClicked(false);
  }

  function getContent() {
    if (leftClicked) {
      return <MainApp content={<HopesContent handleBackClick={handleBackClick} />}/>
    } else if (rightClicked) {
      return <MainApp content={<FearsContent handleBackClick={handleBackClick} />}/>
    } else {
      return <div>
              <LeftContent />
              <RightContent />
            </div>;
    }
  }
  return (
    <div className="App">
      {getContent()}
    </ div>
  );
}

export default App;
