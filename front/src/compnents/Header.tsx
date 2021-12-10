import React, { FC } from "react";
import PropTypes from "prop-types"


// const Header: FC<HeadeLine> = (props) =>{
//     console.log(props);
    
//     return(
//         <h1>{"courseName"}</h1>
//     )
// }
function Header(props: HeadeLine) {
    console.log(props);
    
    return(
        <h1>{"courseName"}</h1>
    )
}

interface HeadeLine {
    courseName: string
}

export default Header;