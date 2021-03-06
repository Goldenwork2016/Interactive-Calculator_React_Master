import styled from "styled-components";

const Calculator = styled.main`
    align-items: center;
    background: ${props => props.theme.colors.calculator};
    border-radius: 1rem;
    display: flex;
    flex-flow: column nowrap;
    margin: 4rem auto 0 auto;
    padding: 50px;
    width: 450px;

    > header {
        align-self: flex-start;
        color: ${props => props.theme.colors.main};
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: bold;
    }

    .display {
        margin-bottom: 50px;
        width: 100%;
    }

    .buttons {
        background: ${props => props.theme.colors.calculator};
    }

    .container-horizon {
        display: flex;
        width: 100%;
        padding: 20px 0;
        align-items: baseline;
        justify-content: space-around;
    }
`;

export default Calculator;
