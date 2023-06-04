import React from "react";
import {Route, Routes} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home"
import Services from "./Services";
import AboutUs from "./AboutUs";
import Faq from "./Faq"
import Offers from "./Offers";
import Contact from "./Contact";

const Main = () => (
<main>
    <Routes>
        <Route path="/Services" element={<Services/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Faq" element={<Faq/>} />
        <Route path="/Offers" element={<Offers/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route exact path="/" element={<Home />} />
    </Routes>
</main>
);
export default Main;