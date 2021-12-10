import { Patient } from "./types";
import type {OmitedData, Fields} from "./types";
import { v4  } from 'uuid';

export const notSensitiveData = (patients: Patient[] ): OmitedData => {
    const notSensitiveDataArray  = [];
    for (const patient of patients){
        notSensitiveDataArray.push(deleteKey(patient));
    }
    return notSensitiveDataArray;
  };

function deleteKey(array: Patient) : Omit<Patient, "ssn">{
    delete array.ssn;
    return array;
}


export const addPatient = ({name, dateOfBirth, ssn, gender, occupation}: Fields)=>{
    const newPatient: Patient ={
        id: v4(), // use uuid
        name: parseText(name),
        dateOfBirth: parseDate(dateOfBirth),
        ssn : parseText(ssn),
        gender: parseGender(gender),
        occupation: parseText(occupation)
    };
    return newPatient;
};

const parseText = (text: unknown) : string=>{
    if(!text || !isString(text)){
        throw (`Incorrect or missing data: ${text}`);
    }
    return text;
};

const parseDate = (date: unknown) : string=>{
    if(!date || !isString(date) || isDate(date)){
        throw (`Incorrect or missing date: ${date}`);
    }
    return date;
};

const parseGender = (gender: unknown) : string=>{
    if(!gender || !isString(gender) || !isGender(gender)){
        throw (`Incorrect or missing gender: ${gender}`);
    }
    return gender;
};

const isGender = (gender: string): boolean=>{
   return ["male", "female", "other"].includes(gender)
};

const isDate = (date: string): boolean=>{
    return Boolean(Date.parse(date));
};

const isString = (text: unknown) :text is string =>{
    return typeof text === "string" || text instanceof String; 
};