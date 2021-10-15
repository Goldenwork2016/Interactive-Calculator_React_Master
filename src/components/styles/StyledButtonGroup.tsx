import styled from "styled-components";

const StyledButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 100%;
  justify-items: center;
  > * {
    justify-content: center;
    align-items: center;
  }
`

export default StyledButtonGroup;