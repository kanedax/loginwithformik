import React from 'react';

const PersonalError = ({children}) => {
    return (
        <div className='error-message'>
            {children}
        </div>
    );
}

export default PersonalError;
