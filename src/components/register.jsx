import React from 'react';
import {Form, Formik } from 'formik';
import * as yup from "yup";
import Formikcontrol from '../formikcomponents/formikcontrol';

const initialValues = {
    user_name:'',
    fisrt_name:'',
    last_name:'',
    email:'',
    mobile:'',
    password:'',
    confirm_password:'',
    auth_mode:'mobile',
}
const onSubmit = (values)=> {
    console.log(values);
}
const validationSchema = yup.object({
    email: yup.string().when('auth_mode' , {
        is:'email',
        then: yup.string().required('لطفا این قسمت را پر کنید').email('لطفا قالب ایمیل را رعایت کنید'),
    }),
    mobile: yup.number().when('auth_mode',{
        is:'mobile',
        then: yup.number().required('لطفا این قسمت را پر کنید'),
    }),
    password: yup.string()
    .required('لطفا این قسمت را پر کنید')
    .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A_Z])(?=.{8,})/ , '  پسورد شامل حروف بزرگ و کوچک انگلیسی , یک عدد و طول آن هشت کاراکتر است'
    ),
    confirm_password: yup.string()
    .oneOf([yup.ref('password'),''],'عدم تطابق')
    .required('لطفا این قسمت را پر کنید'),
    user_name: yup.string().required('لطفا این قسمت را پر کنید').matches(/^[\s0-9a-zA-Z]+$/ , 'فقط اعداد و حروف کوچک و بزرگ انگلیسی'),
    fisrt_name: yup.string().matches(/^[\u0600-\u06FF\s0-9a-zA-Z]+$/ , 'فقط مجاز به استفاده از اعداد و حروف بزرگ و کوچک انگلیسی و حروف فارسی هستید'),
    last_name: yup.string().matches(/^[\u0600-\u06FF\s0-9a-zA-Z]+$/ , 'فقط مجاز به استفاده از اعداد و حروف بزرگ و کوچک انگلیسی و حروف فارسی هستید'),
})

const authModeValues = [
    {id:'mobile' , value:'موبایل'},
    {id:'email' , value:'ایمیل'},
]

const Register = () => {
    return ( 
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                formik=>{
                    console.log(formik);
                    return(
                        <div className='main'>
                            <div className='main-container'>
                                <Form className='login-part'>
                                    <div className='login-title'>
                                        <span> ثبت نام اعضا</span>
                                    </div>
                                    <Formikcontrol
                                        formik={formik}
                                        control="input"
                                        type="text"
                                        name="user_name"
                                        placeholder="نام کاربری"
                                    />
                                    <Formikcontrol
                                        formik={formik}
                                        control="input"
                                        type="text"
                                        name="first_name"
                                        placeholder="نام"
                                    />
                                    <Formikcontrol
                                        formik={formik}
                                        control="input"
                                        type="text"
                                        name="last_name"
                                        placeholder="نام خانوادگی"
                                    />
                                    <Formikcontrol
                                        formik={formik}
                                        control="radio"
                                        type="radio"
                                        name="auth_mode"
                                        options={authModeValues}
                                        label="نوع اعتبار سنجی"
                                    />
                                    {
                                        formik.values.auth_mode=='mobile' ?(
                                            <Formikcontrol
                                            formik={formik}
                                            control="input"
                                            type="number"
                                            name="mobile"
                                            placeholder="موبایل"
                                            />
                                        ):(
                                            <Formikcontrol
                                            formik={formik}
                                            control="input"
                                            type="email"
                                            name="email"
                                            placeholder="ایمیل"
                                            />
                                        )
                                    }
                                    <Formikcontrol
                                        formik={formik}
                                        control="input"
                                        type="password"
                                        name="password"
                                        placeholder="کلمه عبور"
                                    />
                                    <Formikcontrol
                                        formik={formik}
                                        control="input"
                                        type="password"
                                        name="password"
                                        placeholder="تایید کلمه عبور"
                                    />
                                    <div className='submitbutton'>
                                        <button>ثبت نام</button>
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

export default Register;
