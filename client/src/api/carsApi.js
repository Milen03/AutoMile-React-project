import {  useEffect, useState } from "react"
import request from "../utils/request.js"
import useAuth from "../hooks/useAuth.js"


const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/cars`

export const useCars = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        request.get(baseUrl)
            .then(setCars)
    }, [])

    return {
        cars
    }
}

export const useCar = (carId) =>{
    const [car,setCar] = useState({})

    useEffect(()=>{
        request.get(`${baseUrl}/${carId}`)
        .then(setCar)
    },[carId])

    return{
        car
    }
}

export const useCreateCar = () => {
    const { request } = useAuth()
   
    const create = async (carData) =>{
        try{
            return await request.post(baseUrl, carData)
        }catch(err){
            alert("Car creation failed: " + err.message);
        }
        
    }
    return {
        create
    }
}

export const useEditCar = () => {
    const { request } = useAuth();
 
    const edit = async (carId, carData) => {
        try {
            return await request.put(`${baseUrl}/${carId}`, { ...carData, _id: carId });
        } catch (error) {
            alert("Car update failed: " + error.message);
        }
    };
 
    return { 
        edit
     };
};

 export const useDelete = () =>{

    const { request } = useAuth()

    const deleteGame = (carId) =>
       request.delete(`${baseUrl}/${carId}`)
    

    return{
        deleteGame
    }
}

