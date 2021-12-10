import React from "react";
import { Course } from "../types";
function Total(props:Course[]){
    const array = Object.entries(props);
    let total = 0;
    array.map((course)=>{
        total += course[1].exerciseCount;
    })
    return(
        <p>
        Number of exercises {total}
      </p>
    )
}

export default Total;