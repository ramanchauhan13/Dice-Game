import React from 'react';
import styled from 'styled-components';

function StartGame(props) {
    const {toggle} = props
    return (
        <div>

            <Container>
                <div className='leftDiv'>
                    <img src="./images/dice.jpeg" alt='dice' />
                </div>
                <div className='rightDiv'>
                    <h1>DICE GAME</h1>
                    <button onClick={toggle}>Play Now</button>
                </div>
            </Container>

        </div>
    )
}

export default StartGame;

// Style
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .leftDiv{
    height: 40%;
    width: 50%;
    display: flex;
    justify-content: end;

  }

  .rightDiv{
    height: 40%;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  h1{
    font-weight: 700;
    font-size: xxx-large;
    margin-bottom: 10px;
  }

  button{
    background-color: black;
    color: white;
    padding: 2px 8px;
    border-radius: 20px;
    max-width: 150px;
    transition: 0.5s background ease-in;
  }

  button:hover{
    background-color: #e4e5e6;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }

  @media (max-width: 480px) {
    flex-direction: column;

    .leftDiv, .rightDiv {
      width: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    
    h1 {
      font-size: large;
    }

    button {
      padding: 10px 20px;
      font-size: medium;
    }
  }
  
`;



