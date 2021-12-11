import React from "react";
import {PartValue} from "../types"

function Part(props: PartValue){

    const data = props.coursePart.type
    let x: JSX.Element = <div></div>;
        switch (data) {
            case "normal" :
                x = <div>
                        <h3>
                            {props.coursePart.name} {props.coursePart.exerciseCount}
                        </h3>
                        <p>
                            {props.coursePart.description}
                        </p>    
                    </div>
                break;
            case "groupProject":
                x = <div>
                        <h3>
                            {props.coursePart.name} {props.coursePart.exerciseCount}
                        </h3>
                        <p>
                            project exercise {props.coursePart.groupProjectCount}
                        </p>    
                    </div>
                break;
            case "submission":
                x = <div>
                        <h3>
                            {props.coursePart.name} {props.coursePart.exerciseCount}
                        </h3>
                        <p>
                            {props.coursePart.description}
                        </p>    
                        <p>
                            {props.coursePart.exerciseSubmissionLink}
                        </p>    
                    </div>
                break;
            case "special":
                x = <div>
                        <h3>
                            {props.coursePart.name} {props.coursePart.exerciseCount}
                        </h3>
                        <p>
                            {props.coursePart.description} <br/>
                            requied skills: {props.coursePart.requirements[0]}, {props.coursePart.requirements[1]}
                        </p>    
                    </div>
                break;    
            default:
                console.log("ERROR");
                break;
        }    
    return(
            x
    )
}



export default Part;
