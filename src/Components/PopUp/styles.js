import styled from "styled-components";

export const StyledPopUp = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  margin: 0px 10px 10px 0px;
  border-radius: 8px;
  background: rgba(199, 199, 199, 0.1);

  position: relative;
  text-color: #ffffff;
  align-items: flex-start;

`;
export const StyledButton = styled.div`
  display: inline-block;
  align-self: flex-end;
  justify-self: center;
  border-color: aliceblue;
  width: 100%;
  background: rgba(199, 199, 199, 0.1);
  border-radius: 5px;
`;

export const StyledTogglePopUp = styled.button`
  -webkit-appearance: none;
  padding: 4px 8px 4px 8px;
  font-size: 16pt;
  background: rgba(111, 111, 111, 0.9);
  font-weight: 600;
  position: fixed;
  border-radius: 50%;
  border-style: none;
  top: 3.5rem;
  left: 0.5rem;
`;

export const StyledTogglePopUpExpanded = styled.button`
  padding: 4px 8px 4px 8px;
  position: absolute;
  font-weight: 600;
  background: rgba(249, 249, 249, 0.9);
  font-size: 16pt;
  border-style: none;
  border-radius: 50%;
  right: 10px;
  top: 10px;
  z-index: 1;
`;
