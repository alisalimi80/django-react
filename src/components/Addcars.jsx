import React, {  useState } from 'react';
import axios from 'axios';

const Addcars = () => {
    const [formdata,setformdata] = useState({
        make:'',
        model:'',
        year:'',
        img:''
    })
    const [valid,setvalid] = useState(2)
    const onchange = (e)=>{
        const input = e.currentTarget;
        const acount = {...formdata};
        acount[input.name]=input.value;
        setformdata(acount)
        
        
    }
    const handlesunbmit = async(e)=>{
        e.preventDefault()
        const response = await axios.post('api/',formdata)
        if (response.status === 201){
            setvalid(0)
            
            
            
        }else{
            setvalid(1)
        }
        

        
        
    }
    return ( 
        <>
        <form >
            <input value={formdata.make} type="text" name='make' id='make' onChange={onchange}/>
            <label htmlFor="make">Make</label>
            <input value={formdata.model}  type="text" name='model' id='molde' onChange={onchange}/>
            <label htmlFor="model">Model</label>
            <input value={formdata.year}  type="text" name='year' id='year' onChange={onchange}/>
            <label htmlFor="year">Year</label>
            <input value={formdata.img}  type="text" name='img' id='img' onChange={onchange}/>
            <label htmlFor="img">Image</label>
            <input type="submit" onClick={handlesunbmit}/>
        </form>
        <p>{valid===0?"car has been submit":valid===1?"error":""}</p>
        </>
        
     );
}
 
export default Addcars;