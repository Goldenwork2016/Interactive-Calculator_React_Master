import styled from "styled-components";

const StyledDisplay = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.display};
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 10px 20px;

  > div {
    border-radius: 10px;
    flex: 1;
    font-family: "Lucida Console", Monaco, monospace;
    font-size: 30px;
    padding: 0px 8px;
    text-align: right;
  }
  > input {
    width: 100%;
    height: 30px;
    padding: 0;
    border: none;
    background-color: rgb(0,0,0,0);
    font-size: 24px;
    text-align: end;
    outline: none;
  }
`;

export default StyledDisplay;
