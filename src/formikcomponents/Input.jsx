import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import PersonalError from './PersonalError';

const Input = ({name, type, placeholder, formik}) => {
    return (
        <div>
            <div className="username-input" >
                <FastField name={name} type={type} placeholder={placeholder}/>
                <ErrorMessage name={name} component={PersonalError}/>
            </div>
        </div>
    );
}

export default Input;
