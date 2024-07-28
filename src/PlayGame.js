import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components';
import RollDice from './RollDice';
import { useState } from 'react';
import Rules from './Rules';

function PlayGame() {

  const [currentDice, setcurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false)


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You Have Not Select Any  Number");
      return
    }

    let randomNumber = generateRandomNumber(1, 6);
    setcurrentDice((prev) => randomNumber)


    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber)
    }
    else {
      setScore((prev) => prev - 2)
    }

    setSelectedNumber(undefined)
  }

  const resetScore = () => {
    setScore(0);
  }


  return (
    <MainContainer>
      <div className='topSection'>
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice
        currentDice={currentDice}
        rollDice={rollDice}
        resetScore={resetScore}
      />
      <div className='btns'>
      <Button onClick={resetScore}>Reset Score</Button>
      <Button2
        onClick={() => setShowRules((prev) => !prev)}
      >
        {showRules ? "Hide" : "Show"} Rules</Button2>
      </div>
      {showRules && <Rules />}
    </MainContainer>

  )
}

export default PlayGame;

let MainContainer = styled.div`
  padding-top: 40px;
  height: 100vh;
  
  .topSection{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

.btns{
  display: flex;
  flex-direction: column;
  max-width: 150px;
  margin: 0 auto;
  gap: 8px;
}
`

let Button = styled.button`
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.4s background ease-in;
    height: 23px;

&:hover{
    background-color: black;
    color: white;
    border: 1px solid black;
    transition: 0.3s background ease-in;
}
`

let Button2 = styled(Button)`
    background-color: black;
    color: white;

    &:hover{
    background-color: #e4e5e6;
    color: black;
    }
`
