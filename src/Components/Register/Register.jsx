import React, { useState } from 'react'
import { useFormik } from 'formik';
import styles from './Register.module.css';
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Register() {

    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false)
const [messageUser, setMessageUser] = useState('')
    
 async  function handelRegister(values) {
setIsLoading(true)
     let { data } = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`, values).catch((err) =>{
           setIsLoading(false)
           setMessageUser(`${err.response.data.errors.param} : ${err.response.data.errors.msg}`)
          
          
       })
     
     console.log('hello'); 
     
     if (data.message === 'success') {
            setIsLoading(false)
    navigate('/login')
}

   
    }
    
    let validationSchema = Yup.object({
        name: Yup.string().required('name is required').min(3, 'name minlength is 3').max(10, 'name maxlength is 10'),
        
        email: Yup.string().required('email is required').email('email is invalid'),

        password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{5,10}$/ , 'password must start with uppercase and any length after it lowercase and numbers 0-9 all length can use 10'),

        rePassword: Yup.string().required('rePassword is required').oneOf([Yup.ref('password')] , 'password and rePassword doesnt match  '),
        phone:Yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/ , 'phone must start with 01 and any eg number'),

    })
    
    let formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            password: '',
            rePassword:''
        },
        validationSchema,
        onSubmit: handelRegister

    });

    return <>
        <div className="container-fluid mt-5 my-5 pt-5 py-5">

            
            <div className="w-75 mx-auto py-4 text-white fonts min-login">
                {messageUser ? <div className="alert bg-alert">{messageUser }</div>:null }
                
                <h3 className='ms-5 ps-5 w-100 d-flex '>register Now : </h3>
         
               
        
            <div className="w-50 mx-auto">
                <div className="inputs w-100  py-5 px-5 box-shadow min-login">
                    <form onSubmit={formik.handleSubmit}>
                        

                    <label htmlFor="name" >Name :</label>
                    <input   onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} className=' form-control my-2' type="text" name='name' id='name' />
                        
                        {formik.errors.name && formik.touched.name ? <div className="alert bg-alert">{formik.errors.name}</div> : null}
                            
                    <label htmlFor="phone">Phone :</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} className=' form-control my-2' type="tel" name='phone' id='phone' />
                    
                        {formik.errors.phone && formik.touched.phone ? <div className="alert bg-alert">{formik.errors.phone}</div> : null}
                            
                            
                    <label htmlFor="email">Email :</label>
                    <input onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.email} className=' form-control my-2' type="text" name='email' id='email' />
                    
                        {formik.errors.email && formik.touched.email ? <div className="alert bg-alert">{formik.errors.email}</div> : null}
                            

                    <label htmlFor="password">Password :</label>
                    <input onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.password} className=' form-control my-2' type="password" name='password' id='password' />
                    
                        {formik.errors.password && formik.touched.password ? <div className="alert bg-alert">{formik.errors.password}</div> : null}
                            

                    <label htmlFor="rePassword">rePassword :</label>
                    <input onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.rePassword} className=' form-control my-2' type="password" name='rePassword' id='rePassword' />

                        {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert bg-alert">{formik.errors.rePassword}</div> : null}
                            
                    
                            {isLoading ? <button type='button' className='btn  btn-move text-white btn-border '> <i className='fas fa-spinner fa-spin'></i>  </button>
                                : <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn  btn-move text-white btn-border '>Register</button>}
                    
                    
                    

                </form>
                </div>

        </div>
        
    </div>

        </div>
        
    </>
}
