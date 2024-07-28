import styled from 'styled-components';

function RollDice(props) {
    const {currentDice,rollDice} = props


  return (
    <Main>
        <div className='mainBox'>
        <div onClick={rollDice}>
        <img src={`/images/dice${currentDice}.webp`} alt='dice'/>
        </div>
        <p>Click on Dice to Roll</p>
      </div>
    </Main>
  )
}

export default RollDice;

let Main = styled.div`

display: flex;
justify-content: center;
margin-top: 50px;

    .mainBox{
        height: 200px;
        width: 160px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }


img{
    height: 100%;
    width: 100%;
    cursor: pointer;
}

img:hover{
    border: 1px solid black;
    
}

p{
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
} 
`;


