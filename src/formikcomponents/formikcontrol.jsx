import React from 'react';
import Date from './date';
import File from './file';
import Input from './Input';
import Radio from './radio';


const Formikcontrol = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props} />
        case 'radio':
            return <Radio {...props} />
        case 'date':
            return <Date {...props} />
        case 'file':
            return <File {...props} />
        default:
            return null
    }
}

export default Formikcontrol;
