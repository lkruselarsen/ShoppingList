import styled from "styled-components";

export const StyledSimpleList = styled.div`
-webkit-appearance: none;
justify-content: left;
  background: transparent;
  margin: 0px 10px 10px 0px;
  border-radius: 8px;
font-size: 8px;
overflow: scroll;
height: 20vh;
`;

export const StyledSimpleEntry = styled.div`
-webkit-appearance: none;
justify-content: left;
  background: transparent;
  text-align: left;
  margin: 1px 1px 1px 1px;
  padding: 1px 10px 1px 10px;
  border-radius: 2px;
font-size: 8px;
&:hover {
    background-color: lightblue;
  }
`;