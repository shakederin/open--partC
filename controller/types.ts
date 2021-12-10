export interface Diagnose {
    "code": string;
    "name": string;
    "latin"?: string;
}

export interface Patient {
    "id": string;
    "name": string;
    "dateOfBirth": string;
    "ssn"?: string;
    "gender": string;
    "occupation": string;
}

// export type newPatientEntery = Omit<Patient, "id">

export type OmitedData = Omit<Patient, "ssn">[];
export type Fields = {
    name: unknown,
    dateOfBirth: unknown,
    ssn?: unknown,
    gender: unknown,
    occupation: unknown,
};