import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import RouteMap from './components/RouteMap';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <RouteMap/>
            </div>
        </BrowserRouter>
    );
}

export default App;
