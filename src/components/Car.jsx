import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
const Car = () => {
    const [car,setcar] = useState({});
    const [driver,setdriver] = useState([]);
    const { pk } = useParams();
    
    useEffect(()=>{
        async function fetchdata(){
            const response = await axios.get(`/api/${pk}`)
            const response2 = await axios.get(`/api/driver`)
            setdriver(response2.data)
            console.log(response.data);
            setcar(response.data);

            
        }
        fetchdata()
        
    },[]);
    return ( 
    <>
        <div className="container mt-3 ">
            <div className="container1 border border-dark p-4">
                <div className="img">
                    <img className='w-100' src={car.img} alt={car.mode} />
                </div>
                <div className="description mt-3">
                    <h3>Make/Model: {car.make}/{car.model}</h3>
                    <h3>Driver: {car.owner}</h3>
                </div>
            </div>
        </div>
    </>
    );
}
 
export default Car;