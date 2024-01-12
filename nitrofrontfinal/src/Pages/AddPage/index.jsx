import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.css'
import { serviceDelete, servicePost } from '../../helpers/serviceCrud';
const AddPage = () => {
    const [api, setApi] = useState([])



    useEffect(() => {
        fetch('http://localhost:3000')
        .then(res=>res.json())
        .then(data=>setApi(data))
    }, [])
    
  return (
    <>
    <div>
             <h1>Add Page</h1>
             <Formik
       initialValues={{ icon: '', title: '', text: '' }}
       validationSchema={Yup.object({
         icon: Yup.string()
           .required('Required'),
         title: Yup.string()
           .required('Required'),
         text: Yup.string()
        .required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
            servicePost(values)

           setSubmitting(false);
         }, 400);
       }}
     >
       <Form >
         <div>
         <label htmlFor="icon">icon</label>
         <Field name="icon" type="text" />
         <ErrorMessage name="icon" />
 
         </div>
      
      <div>
      <label htmlFor="title">title</label>
         <Field name="title" type="text"/>
         <ErrorMessage name="title" />
 
      </div>
        
        <div>
        <label htmlFor="text">text</label>
         <Field name="text" type="text" />
         <ErrorMessage name="text" />
        </div>
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
    </div>
    <br /><br /><br />
    <table>
        <thead>
            <tr>
            <th>icon</th>
            <th>Title</th>
            <th>text</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {api.map((x)=>{
                return(
                    <tr key={x._id}>
                        <td><i className={x.icon}></i></td>
                        <td>{x.title}</td>
                        <td>{x.text}</td>
                        <td><button onClick={()=>serviceDelete(x._id)}>delete</button></td>
                    </tr>
                )
            })}
        </tbody>
    </table>



    
    </>
  )
}

export default AddPage