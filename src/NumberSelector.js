import styled from 'styled-components'

function NumberSelector(props) {
    const {selectedNumber,setSelectedNumber,error,setError}=props

let arrayOfBox = [1,2,3,4,5,6];

let numberSelectorHandler = (value)=>{
    setSelectedNumber(value);
    setError("");
}


  return (
    <NumberSelectorBox>
    <p>{error}</p>
    <div className='mainBox'>
        {arrayOfBox.map((value,i)=>
        <Box
        key={i}
        onClick={()=>numberSelectorHandler(value)}
        isSelected={value===selectedNumber}
        >{value}</Box>)}
    </div>
    <p>Select Number</p>
    </NumberSelectorBox>
  )
}

export default NumberSelector;

let NumberSelectorBox = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;
.mainBox{
    display: flex;
    gap: 10px;
}
p{
    font-weight: bold;
    font-size: large;
}
`;

let Box = styled.div`
    height: 50px;
    width: 50px;
    border: 2px solid black;
    display: grid;
    place-items: center;
    cursor: pointer;
    font-weight: bold;
    background-color: ${(props)=> props.isSelected ? "black" : "white"};
    color: ${(props)=> props.isSelected ? "white" : "black"};
    
`;


