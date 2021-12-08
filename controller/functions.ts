import { Patient } from "./types";
import type {OmitedData} from "./types"


export const notSensitiveData = (patients: Patient[] ): OmitedData => {
    const notSensitiveDataArray  = [];
    for (const patient of patients){
        notSensitiveDataArray.push(deleteKey(patient))
    }
    return notSensitiveDataArray;
  };

function deleteKey(array: Patient) : Omit<Patient, "ssn">{
    delete array.ssn
    return array;
}