import React from "react";

interface props {
    courseName: string
}

function Header(props: props): JSX.Element  {
    return(
        <h1>{props.courseName}</h1>
    );
}

export default Header;