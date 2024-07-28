import React from 'react'
import styled from 'styled-components';

function Rules() {
  return (
    <RulesContainer>
    <h1>How to Play Dice Gamee</h1>
  <div className='text'>
      <p>Select Any Number</p>
      <p>Roll The Dice Image</p>
      <p>After click on Dice if selected number is equal to the Dice number you will get the same points as Dice</p>
      <p>If you get wrong guess than 2 point will be deducted</p>
  </div>
  </RulesContainer>
  )
}

export default Rules;

let RulesContainer = styled.div`
    background-color: #FBF1F1;
    padding: 10px;
    max-width: 700px;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;

    h1{
        font-weight: bold;
        font-size: large;
        margin-bottom: 10px;
    }

    p{
        font-size: small;
        font-weight: 500;
    }

`
