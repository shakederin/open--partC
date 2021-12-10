import express from "express";
const app = express();
import { Diagnose} from "../controller/types";
import {Patient} from "../controller/types";
import { notSensitiveData, addPatient } from "../controller/functions";
import  diagnoses from "./data/diagnoses.json";
import  patients from "./data/patients.json";
const port = 3000;
const patientsArray: Patient[] = patients;

app.use(express.json())

app.get("/api/diagnoses", (_req, res)=>{
    const data:Diagnose[] = diagnoses;
    res.json(data);
});

app.get("/api/patients", (_req,res)=>{ //5
    res.send(notSensitiveData(patientsArray));
});

app.post("/api/patients", (req,res)=>{
    try {
        const newPatient: Patient = addPatient(req.body);
        console.log((patientsArray[patientsArray.length-1]));
        patientsArray.push(newPatient);
        console.log((patientsArray[patientsArray.length-1]));
        res.send("add successfuly");
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, ()=>{
    console.log("listening to port " + port);
    
});
