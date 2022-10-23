import React from 'react';
import { Routes ,Route } from "react-router-dom";
import TestLogin from './testLogin';
import TestLogin2 from './testlogin2';

const RouteMap = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<TestLogin2/>}></Route>
                <Route path="/register" element={<TestLogin/>}></Route>
                <Route path="*" element={<TestLogin/>} ></Route>
            </Routes>
        </div>
    );
}

export default RouteMap;
