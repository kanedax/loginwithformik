import {Form, Formik } from 'formik';
import React from 'react';
import * as yup from "yup";
import Formikcontrol from '../formikcomponents/formikcontrol';

const initialValues = {
    email:'',
    password:'',
}
const onSubmit = (values)=> {
    console.log(values);
}
const validationSchema = yup.object({
    email: yup.string().required('لطفا این قسمت را پر کنید').email('لطفا قالب ایمیل را رعایت کنید'),
    password: yup.string()
    .required('لطفا این قسمت را پر کنید')
    .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A_Z])(?=.{8,})/ , '  پسورد شامل حروف بزرگ و کوچک انگلیسی , یک عدد و طول آن هشت کاراکتر است'
    ),
})


const Login = () => {
    return ( 
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                formik=>{
                    return(
                        <div className='main'>
                            <div className='main-container'>
                                <Form className='login-part'>
                                    <div className='login-title'>
                                        <span>ورود اعضا</span>
                                    </div>
                                    <Formikcontrol
                                        formik={formik}
                                        control="input"
                                        type="email"
                                        name="email"
                                        placeholder="ایمیل"
                                    />
                                    <Formikcontrol
                                        formik={formik}
                                        control="input"
                                        type="password"
                                        name="password"
                                        placeholder="کلمه عبور"
                                    />
                                    <div className='submitbutton'>
                                        <button>ورود</button>
                                    </div>
                                </Form>
                                <div className='image-part'></div>
                            </div>
                        </div>
                    )
                }
            }
        </Formik>
    );
}

export default Login;
