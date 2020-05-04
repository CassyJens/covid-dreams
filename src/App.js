import React from 'react';
import './App.css';
import MainNav from './MainNav';
import AppBar from '@material-ui/core/AppBar';
import MainApp from './MainApp';
import HopesContent from './HopesContent';
import FearsContent from './FearsContent';
import HomeContent from './HomeContent';

function App() {

  const [clickedIdx, setValue] = React.useState(0);

  const handleNavClick = (event, newValue) => {
      console.log("new idx is " + newValue);
      setValue(newValue);
  };

  const pages = [
    <HomeContent clickedIdx={clickedIdx} />,
    <HopesContent clickedIdx={clickedIdx} />,
    <FearsContent clickedIdx={clickedIdx} />
  ];

  return (
    <div className="App">
      <AppBar position="static">
        <MainNav onClick={handleNavClick} clickedIdx={clickedIdx} />
      </AppBar>
      <MainApp content={pages[clickedIdx]}/>
    </ div>
  );
}

export default App;
