import styled from "styled-components";

export const StyledBottomMenu = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;
  margin: 10px;
  padding: 10px;

  border-radius: 8px;
`;
export const StyledToggle = styled.button`
  -webkit-appearance: none;
  padding: 4px 8px 4px 8px;
  background: rgba(249, 249, 249, 0.9);
  font-size: 16pt;
  font-weight: 600;
  position: fixed;
  right: 2rem;
  bottom: 8%;
  border-radius: 50%;
  border-style: none;
`;

export const StyledExpanded = styled.button`
  -webkit-appearance: none;
  padding: 4px 8px 4px 8px;
  background: rgba(249, 249, 249, 0.9);
  font-size: 16pt;
  font-weight: 600;
  position: fixed;
  right: 2rem;
  bottom: 25%;
  border-radius: 50%;
  border-style: none;
`;
