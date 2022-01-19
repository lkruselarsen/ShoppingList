import styled from "styled-components";

export const StyledCheckMark = styled.div`
  -webkit-appearance: none;
  background-color: #f7f7f7;
  border: 1px solid #cacece;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 9px;
  border-radius: 3px;
  display: inline-block;
  position: relative;


  border-style: solid;
  border-color: #000000;
  border-width: 3px;
  background-color: #ffffff;
  color: #000000;
  text-color: #000000;
  padding: 2px 3px 2px 2px;
  margin: 10px;
  width: 1em;
  height: 1em;
  display: inline-flex;
  justify-content: center;

 
  border-radius: 18px;
  font-size: 2rem;

  ::after {
    color: #000000;
    text-color: #000000;
    padding: 2px 2px 2px 2px;
    margin: 10px;
    width: 1em;
    height: 1em;
    display: inline-flex;
    justify-content: center;

  }

  :checked {
    border-style: solid;
    background-color: #000000;
    color: #005C2B;
    padding: 2px 2px 2px 2px;
    color: #000000;
    text-color: #000000;
    margin: 1px;
    width: 1em;
    height: 1em;
    display: inline-flex;
    justify-content: center;
 


  }

  :hover {
    border-style: solid;
    background-color: #D6FFE9;
    color: #000000;
    text-color: #000000;
    padding: 2px 2px 2px 2px;
    margin: 10px;
    width: 1em;
    height: 1em;
    display: inline-flex;
    justify-content: center;

  }
  :checked:hover {
    border-style: solid;
    background-color: #f4f4f4;
    color: #000000;
    text-color: #000000;
    padding: 2px 2px 2px 2px;
    margin: 1px;
    width: 1em;
    height: 1em;
    display: inline-flex;
    justify-content: center;
    
  }


  :active,
  Check:checked:active {
    border-style: solid;
    background-color: #6e1414;
    color: #000000;
    text-color: #000000;
    padding: 2px 2px 2px 2px;
    width: 1em;
    height: 1em;
    margin: 10px;
    display: inline-flex;
    justify-content: center;

  }
  :active::after {
    color: #000000;
    text-color: #000000;
    content: "";
    display: inline-flex;
    justify-content: center;
    
  }

  :checked::after {
      #f4f4f4
      color: #000000;
      text-color: #000000;
    padding: 2px 2px 2px 2px;
    margin: 1px;
    width: 1em;
    height: 1em;
    display: inline-flex;
    justify-content: center;

    background-color: #f4f4f4;

  }
`;
