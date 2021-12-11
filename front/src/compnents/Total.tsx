import React from "react";
import { CoursePart } from "../types";


function Total(props: {courseParts : CoursePart[]}){
    const array = props.courseParts;
    let total = 0;
    array.map((course)=>{
        total += course.exerciseCount;
    })
    return(
        <h2>
        Number of exercises {total}
        </h2>
    )
}

export default Total;