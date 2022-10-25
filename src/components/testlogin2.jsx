import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from "yup";
import Formikcontrol from '../formikcomponents/formikcontrol';
import axios from 'axios';
import swal from 'sweetalert';
import { NavLink } from "react-router-dom";

const initialValues = {
    phone: '',
    password: '',
    c_password: '',

}

const onSubmit = (values, submitProps) => {
    console.log(values);
    setTimeout(() => {
        submitProps.setSubmitting(false);
        submitProps.resetForm();
    }, 3000);
    axios.post('http://authservice.azhadev.ir/api/auth/login', values).
        then(res => {
            console.log(res);
            if (res.status == '200') {
                swal({
                    title: " ",
                    text: "با موفقیت وارد شدید",
                    icon: "success",
                    button: "متوجه شدم",
                })
            } else {
                swal({
                    title: "هشدار",
                    text: "ایراد در روند ورود به سامانه",
                    icon: "warning",
                    button: "متوجه شدم",
                })
            }
            localStorage.setItem("token", res.data.token);
        })
}

const handleLogOut = async () => {
    console.log();
    await axios.get('http://authservice.azhadev.ir/api/auth/logout', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => {
        console.log(res);
        if (res.status == '200') {
            swal({
                title: "خروج ",
                text: "با موفقیت خارج شدید ",
                icon: "success",
                button: "متوجه شدم",
            })
        } else {
            swal({
                title: "هشدار",
                text: "خطا در خروج",
                icon: "warning",
                button: "متوجه شدم",
            })
        }
        localStorage.clear();

    })
}

const validationSchema = yup.object({

    phone: yup.string().required('لطفا این قسمت را پر کنید'),
    password: yup.string()
        .required('لطفا این قسمت را پر کنید')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, '  پسورد شامل حروف بزرگ و کوچک انگلیسی , یک عدد و طول آن هشت کاراکتر است'
        ),
    c_password: yup.string()
        .oneOf([yup.ref('password'), ''], 'عدم تطابق')
        .required('لطفا این قسمت را پر کنید'),

})


const TestLogin2 = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                formik => {
                    console.log(formik);
                    return (
                        <div className='main'>
                            <div className='main-container'>
                                <div className='image-part'>
                                    <i className='fas fa-user'></i>
                                </div>
                                <Form className='login-part'>
                                    <div className='login-title'>
                                        <span> ورود به سامانه </span>
                                    </div>

                                    <Formikcontrol
                                        formik={formik}
                                        control="input"
                                        type="text"
                                        name="phone"
                                        placeholder="موبایل"
                                    />
                                    <Formikcontrol
                                        formik={formik}
                                        control="input"
                                        type="password"
                                        name="password"
                                        placeholder="کلمه عبور"
                                    />
                                    <div className='submitbutton'>
                                        <button type='submit' disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting} >
                                            {
                                                formik.isSubmitting ? (
                                                    <div className="fa-3x">
                                                        <i className="fas fa-spinner fa-spin" style={{ color: 'blue' }} ></i>
                                                    </div>
                                                ) : ("ورود ")
                                            }
                                        </button>
                                    </div>
                                    <div className='submitbutton'>
                                        <button onClick={handleLogOut} type='button' disabled={!localStorage.length} > خروج</button>
                                    </div>
                                    <div className='register'>
                                        <NavLink to="/register">
                                            تاکنون ثبت نام نکرده اید؟
                                        </NavLink>
                                    </div>
                                </Form>

                            </div>
                        </div>
                    )
                }
            }
        </Formik>
    );
}

export default TestLogin2;
