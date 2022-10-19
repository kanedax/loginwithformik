import { ErrorMessage} from 'formik';
import React from 'react';
import PersonalError from './personalError';

const File = ({name, label, formik}) => {
    return (
        <div>
            <div className="username-input-file" >
                <input className='input-container' type='text' placeholder={label}
                value={formik.values[name] ? formik.values[name].name : ""} onChange={()=>null}
                />
                <input  className='file-container' type='file' placeholder={label} name={name} 
                onChange={e=>{
                    formik.setFieldValue(name , e.target.files[0])
                }}
                />
                <ErrorMessage name={name} component={PersonalError}/>
            </div>
        </div>
    );
}

export default File;
