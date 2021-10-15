import React from "react";
import { toRoman } from "roman-numerals";
import { Context } from "../services/Context";
import StyledDisplay from "./styles/StyledDisplay";

// const  romanize = (num: number) => {
//     if (isNaN(num))
//         return 'nulla';
//     if (num === 0 )
//         return 'nulla';
    
//     const digits: any = String(+num).split(""),
//         key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
//                "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
//                "","I","II","III","IV","V","VI","VII","VIII","IX"];
//     let roman: string = "", i: number = 3;
//     while (i--) 
//         roman = (key[+ digits.pop() + (i * 10)] || "") + roman;

//     return Array(+digits.join("") + 1).join("M") + roman;
// }

const romanize = (num: number) => {
    if (isNaN(num) || num === 0)
        return 'nulla';
    const lookup: any = {M̅:1000000,D̅:500000,C̅:100000,L̅:50000,X̅:10000,I̅X̅:9000,V̅I̅I̅I̅:8000,V̅I̅I̅:7000,V̅I̅:6000,V̅:5000,I̅V̅:4000,M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman: string = '', i: any;
    for ( i in lookup ) {
        while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
        }
    }
    return roman;
}
const Display = () => {
    const [state] = React.useContext(Context);
    return (
        <StyledDisplay className="display">
            <input type="text" 
               value={state?.digitType === 'STANDARD' ? state?.display : Number(state?.display) > 99999999 ? "limit error" : romanize(Number(state?.display))}
            />
        </StyledDisplay>
    );
};

export default Display;
