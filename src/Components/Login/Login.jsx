import React, { useState } from 'react'
import { useFormik } from 'formik';
import styles from './Login.module.css';
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login({saveUserData}) {

    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false)
const [messageUser, setMessageUser] = useState('')
    
 async  function handelLogin(values) {
setIsLoading(true)
     let { data } = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`, values).catch((err) =>{
           setIsLoading(false)
           setMessageUser(`${err.response.data.errors.param} : ${err.response.data.errors.msg}`)
          
          
       })
     
     console.log('hello'); 
     
     if (data.message === 'success') {
         localStorage.setItem('userToken', data.token)
         saveUserData();
            setIsLoading(false)
    navigate('/')
}

   
    }
    
    let validationSchema = Yup.object({
        
        email: Yup.string().required('email is required').email('email is invalid'),

        password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{5,10}$/ , 'password must start with uppercase and any length after it lowercase and numbers 0-9 all length can use 10'),

        
    })
    
    let formik = useFormik({
        initialValues: {
           
            email: '',
            password: '',
           
        },
        validationSchema,
        onSubmit: handelLogin

    });

    return <>
        <div className="container-fluid mt-5 my-5 pt-5 py-5">

            
            <div className="w-75 mx-auto py-4 text-white fonts ">
                {messageUser ? <div className="alert bg-alert">{messageUser }</div>:null }
                
                <h3 className='ms-5 ps-5 w-100 d-flex '>register Now : </h3>
         
               
        
            <div className="w-50 mx-auto">
                <div className="inputs w-100  py-5 px-5 box-shadow">
                    <form onSubmit={formik.handleSubmit}>
                        

                  
                    
                            
                    <label htmlFor="email">Email :</label>
                    <input onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.email} className=' form-control my-2' type="text" name='email' id='email' />
                    
                        {formik.errors.email && formik.touched.email ? <div className="alert bg-alert">{formik.errors.email}</div> : null}
                            

                    <label htmlFor="password">Password :</label>
                    <input onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.password} className=' form-control my-2' type="password" name='password' id='password' />
                    
                        {formik.errors.password && formik.touched.password ? <div className="alert bg-alert">{formik.errors.password}</div> : null}
                            

                            {isLoading ? <button type='button' className='btn  btn-move text-white btn-border '> <i className='fas fa-spinner fa-spin'></i>  </button>
                                : <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn  btn-move text-white btn-border '>Register</button>}
                    
                    
                    

                </form>
                </div>

        </div>
        
    </div>

        </div>
        
    </>
}

