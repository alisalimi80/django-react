import React from 'react';
 import ReactDOM from 'react-dom';
 import { Formik, Form, useField } from 'formik';
 import * as Yup from 'yup';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import axios from 'axios'
 import '../styel/style1.css'
 
 const MyTextInput = ({ label, ...props }) => {
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)
   const [field, meta] = useField(props);
   return (
     <>
     <div className='input-container'>
        <div className="label">
       <label className='m-2 lable ' htmlFor={props.id || props.name}>{label}</label>
       </div>
       <input className="text-input m-2 " {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error text-danger">{meta.error}</div>
       ) : null}
       </div>
     </>
   );
 };
 
 
 const SignupForm = () => {
   return (
     <>
       <div className='main p-3'>
       <h1 className='text-center'>Add your Car!</h1>
       <Formik
         initialValues={{
           make: '',
           model: '',
           year: '',
           img: '', 
         }}
         validationSchema={Yup.object({
           make: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .required('Required'),
           model: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
           year: Yup.date(),
           img: Yup.string()
             .required('Required'),
         })}
         onSubmit={async(values, { setSubmitting }) => {
           setTimeout(() => {
             setSubmitting(false);
           }, 400);
            const response = await axios.post('api/',values)
            console.log(response)
         }}
       >
         <Form>
           <MyTextInput
             label="Make"
             name="make"
             type="text"
             placeholder="BMW"
           />
 
           <MyTextInput
             label="Model"
             name="model"
             type="text"
             placeholder="I8"
           />
 
           <MyTextInput
             label="year"
             name="year"
             type="month"
            
             
           />

            <MyTextInput
             label="img"
             name="img"
             type="text"
             
             
           />
           <button className='m-2' type="submit">Submit</button>
         </Form>
       </Formik>
       </div>
     </>
   );
 };
export default SignupForm