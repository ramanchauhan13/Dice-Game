import React from 'react'
import styled from 'styled-components';

function TotalScore(props) {
    const {score} = props
  return (
    <div>
        <ScoreBox>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreBox>
    </div>
  )
}

export default TotalScore;

let ScoreBox = styled.div`
    display: grid;
    place-items: center;
    max-width: 100px;
    height: 100px;

    h1{
        font-weight: 700;
        font-size: xxx-large;
        line-height: 40px;
    }

    p{
        font-weight: bold;
        font-size: large;
    }
`;
