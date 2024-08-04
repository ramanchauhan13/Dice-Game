import React, { useState } from 'react';
import StartGame from './StartGame';
import PlayGame from './PlayGame';


function DiceGame() {

  //change component when click on a buttton
  const [isGamestarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = ()=>{
  setIsGameStarted((prev)=>!prev);
  }

  return (
    <>
      {isGamestarted ? <PlayGame/> : <StartGame toggle={toggleGamePlay}/>}
    </>
  )
};

export default DiceGame;

