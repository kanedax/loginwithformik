import React from 'react';
import { Routes, Route } from "react-router-dom";
import TestLogin from './TestLogin';
import TestLogin2 from './Testlogin2';

const RouteMap = () => {
    return (
        <div>
            <Routes>
                <Route path='*' element={<TestLogin2/>}></Route>
                <Route path="/login" element={<TestLogin2/>}></Route>
                <Route path="/register" element={<TestLogin/>}></Route>
            </Routes>
        </div>
    );
}

export default RouteMap;
