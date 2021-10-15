import React from "react";
import { Context } from "../services/Context";
import { ActionType } from "../services/types";
import ToggleButtonStyle from "./styles/ToggleButtonStyle";

type ToggleButtonProps = {
    label?: string;
};
const ToggleButton = ({ label }: ToggleButtonProps) => {
  const [state, dispatch] = React.useContext(Context);
  const handleChange = () => { 
    dispatch && dispatch({ type: ActionType['DIGIT_TYPE'], payload: '' });
  };
  return (
    <ToggleButtonStyle className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
               name={label} id={label} checked={state?.digitType === 'STANDARD' ? true : false}
               onChange={handleChange} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </ToggleButtonStyle>
  );
};
  
export default ToggleButton;