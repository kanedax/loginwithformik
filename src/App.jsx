import React from 'react';
import Register from './components/register';
import TestLogin from './components/testLogin';
import TestLogin2 from './components/testlogin2';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <TestLogin/>
                <TestLogin2/>
            </div>
        </BrowserRouter>
    );
}

export default App;
