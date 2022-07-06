import React, {  useEffect, useState } from 'react';
import axios from 'axios'
import '../styel/style1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Carousel1 from './carousel';
const Cars = (props) => {
    const [cars,setcars] = useState([])
    useEffect(()=>{
        async function fetchdata(){
            const response = await axios.get('/api');
            setcars(response.data)
            console.log(response.data)

        }
        fetchdata()
    },[])
    return ( 
        <>
        <div className="container">
            <h1 className='mt-4'>Cars</h1>
            <Link to={'/addcar2'}>Add Car</Link>
            <div className="cars-container">
                <div className="row">
                        {cars.map((c,index)=>{
                            return (
                                
                                <div key={index} className="col-6 p-3">
                                    <div className="car">
                                        <Link to={`/car/${c.id}`}>
                                        <img  className='w-100' src={c.img} alt={c.model} />
                                        </Link>
                                        <h3  >{index+1}-Make\Model: {c.make} {c.model}</h3>
                                        <h5 >year: {c.year}</h5>
                                    </div>
                                </div>
                            )
                        })}
                    
                </div>
                <Carousel1/>
            </div>
        </div>
                 
        </>
     );
}
 
export default Cars;