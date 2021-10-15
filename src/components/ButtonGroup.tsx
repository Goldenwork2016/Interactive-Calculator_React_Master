import React from "react";
import { toRoman, toArabic  } from "roman-numerals";
import { Context } from "../services/Context";
import { ActionType } from "../services/types";
import StyledButton from "./styles/StyledButton";
import StyledButtonGroup from "./styles/StyledButtonGroup";

type ButtonProps = {
    children: React.ReactChild;
    type: keyof typeof ActionType;
    value?: string;
};

const Button = ({ type, value, children }: ButtonProps) => {
    const [state, dispatch] = React.useContext(Context);
    const actionPayload = (value && value.toString()) || children.toString();

    const handleClick = () =>
        dispatch && dispatch({ type: ActionType[type], payload: actionPayload });

    const color = children === "=" ? "CALCULATE" : type;
    return (
        <StyledButton onClick={handleClick} color={color}>
            {children}
        </StyledButton>
    );
};

const ButtonGroup = () => {
    const [state] = React.useContext(Context);
    const toCurrentDigitType = (value : number) => {
        return state?.digitType === 'STANDARD' ? value : toRoman(value);
    }
    return (
        <StyledButtonGroup className="buttons">
            <Button type="NUMBER" value="7">{toCurrentDigitType(7)}</Button>
            <Button type="NUMBER" value="8">{toCurrentDigitType(8)}</Button>
            <Button type="NUMBER" value="9">{toCurrentDigitType(9)}</Button>

            <Button type="OPERATOR" value="/">
                &divide;
            </Button>

            <Button type="NUMBER" value="4">{toCurrentDigitType(4)}</Button>
            <Button type="NUMBER" value="5">{toCurrentDigitType(5)}</Button>
            <Button type="NUMBER" value="6">{toCurrentDigitType(6)}</Button>
               
            <Button type="OPERATOR" value="*">
                &times;
            </Button>
            
            <Button type="NUMBER" value="1">{toCurrentDigitType(1)}</Button>
            <Button type="NUMBER" value="2">{toCurrentDigitType(2)}</Button>
            <Button type="NUMBER" value="3">{toCurrentDigitType(3)}</Button>
                
            <Button type="OPERATOR" value="+">
                +
            </Button>

            <Button type="CLEAR_ENTRY">CE</Button>

            <Button type="NUMBER" value="0">{toCurrentDigitType(0)}</Button>
            
            <Button type="OPERATOR" value="=">
                =
            </Button>
            <Button type="OPERATOR" value="-">
                &minus;
            </Button>
        </StyledButtonGroup>
    )
}

export default ButtonGroup;