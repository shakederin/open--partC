interface CoursePartBase {
    name: string;
    exerciseCount: number;
    type: string;
}

interface CourseDes extends CoursePartBase {
    description : string;
}

interface CourseNormalPart extends CourseDes {
    type: "normal";
}

interface CourseProjectPart extends CoursePartBase {
    type: "groupProject";
    groupProjectCount: number;
}

interface CourseSubmissionPart extends CourseDes {
    type: "submission";
    exerciseSubmissionLink: string;
}

interface CourseSpecialPart extends CourseDes{
    requirements: ["nodejs", "jest"],
    type: "special"
} 


export interface PropsCoursePart {
     courseParts: CoursePart[]; 
}

export type CoursePart = CourseProjectPart | CourseSubmissionPart | CourseNormalPart | CourseSpecialPart;

export interface PartValue {
    coursePart: CoursePart;
}
