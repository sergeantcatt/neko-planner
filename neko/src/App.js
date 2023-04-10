/*
    This will be the holder for the main application.

    All components like the tasklist, navbar, homescreen will all be imported and put into this
    App interface. As well as this, most of the page routing will also be done on this page.

    For right now, this'll just be a holder for prototyping components.
*/

import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import NavBar from './NavBar';

/*
    Main app Component

    Current Sub Components:
        None

*/

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </>
    )
}

export default App
