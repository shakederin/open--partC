import React from "react";
import { Course } from "../types";
function Content(props: Course[] ){
    const array = Object.entries(props);
    const dataArray = array.map((array)=>{
        return array[1]
    }
    )   
    return(
        <div>
            <p>
                {dataArray[0].name} {dataArray[0].exerciseCount}
            </p>
            <p>
                {dataArray[1].name} {dataArray[1].exerciseCount}
            </p>
            <p>
                {dataArray[2].name} {dataArray[2].exerciseCount}
            </p>
        </div>
    )
}

export default Content;