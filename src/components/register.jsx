import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from "yup";
import Formikcontrol from '../formikcomponents/Formikcontrol';
import axios from 'axios';


const initialValues = {
    user_name: '',
    fisrt_name: '',
    last_name: '',
    email: '',
    mobile: '',
    password: '',
    confirm_password: '',
    auth_mode: 'mobile',
    date:'',
    image:null,
}
const onSubmit = (values) => {
    console.log(values);
    let formData = new FormData();
    formData.append('user_name' , values.user_name)
    formData.append('mobile' , values.mobile)
    formData.append('password' , values.password)
    formData.append('image' , values.image)

    axios.post('url' , formData , {headers:{'content-type' : 'multipart/form-data'}})

}
const validationSchema = yup.object({
    email: yup.string().when('auth_mode', {
        is: 'email',
        then: yup.string().required('لطفا این قسمت را پر کنید').email('لطفا قالب ایمیل را رعایت کنید'),
    }),
    mobile: yup.number().when('auth_mode', {
        is: 'mobile',
        then: yup.number().required('لطفا این قسمت را پر کنید'),
    }),
    password: yup.string()
        .required('لطفا این قسمت را پر کنید')
        .matches(
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A_Z])(?=.{8,})/, '  پسورد شامل حروف بزرگ و کوچک انگلیسی , یک عدد و طول آن هشت کاراکتر است'
        ),
    confirm_password: yup.string()
        .oneOf([yup.ref('password'), ''], 'عدم تطابق')
        .required('لطفا این قسمت را پر کنید'),
    user_name: yup.string()
    .required('لطفا این قسمت را پر کنید')
    .matches(/^[\s0-9a-zA-Z]+$/, 'فقط اعداد و حروف کوچک و بزرگ انگلیسی'),
    fisrt_name: yup.string()
    .matches(/^[\u0600-\u06FF\s0-9a-zA-Z]+$/, 'فقط مجاز به استفاده از اعداد و حروف بزرگ و کوچک انگلیسی و حروف فارسی هستید'),
    last_name: yup.string()
    .matches(/^[\u0600-\u06FF\s0-9a-zA-Z]+$/, 'فقط مجاز به استفاده از اعداد و حروف بزرگ و کوچک انگلیسی و حروف فارسی هستید'),
    date: yup.string()
    .required('لطفا این قسمت را پر کنید'),
    image: yup.mixed()
    .required('لطفا این قسمت را پر کنید')
    .test("filesize" , "حجم فایل نمیتواند از 100 کیلو بایت بیشتر باشد"
     , value=> value && value.size <= (100*1024))
    .test("format" , "فرمت فایل باید jpg باشد" , value=> value && value.type === "image/jpg"),
})

const authModeValues = [
    { id: 'mobile', value: 'موبایل' },
    { id: 'email', value: 'ایمیل' },
]

const handleSetDate = (value)=>{

}

const Register = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                formik => {
                    
                    return (
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
                                        formik.values.auth_mode == 'mobile' ? (
                                            <Formikcontrol
                                                formik={formik}
                                                control="input"
                                                type="number"
                                                name="mobile"
                                                placeholder="موبایل"
                                            />
                                        ) : (
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
                                        name="confirm_password"
                                        placeholder="تایید کلمه عبور"
                                    />
                                    <Formikcontrol
                                        formik={formik}
                                        control="date"
                                        name="date"
                                        placeholder="تاریخ تولد"
                                    />
                                    <Formikcontrol
                                        formik={formik}
                                        control="file"
                                        name="image"
                                        label="تصویر پروفایل"
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
