import React from "react";
import { PropsCoursePart, CoursePart } from "../types";
import Part from "./Part";

function Content(props: PropsCoursePart){

    function createPart(data: CoursePart[]){
        const returnData = data.map((course, index)=>{
            return <Part key={index} coursePart={course}/>
        })
        return returnData;
    }

    return(
        <div>
           {createPart(props.courseParts)}
        </div>
    )
}

export default Content;