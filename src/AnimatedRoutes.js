import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"

import Error404 from "containers/errors/error404";
import Home from "containers/pages/home";
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
import Contact from "containers/pages/Contact";
import Blog from "containers/pages/Blog";
import Search from "containers/pages/Search";
import Category from "containers/pages/Category";
import Careers from "containers/pages/Careers";
import Abaout from "containers/pages/About";

import { AnimatePresence } from 'framer-motion';


function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/*Error Display*/}
                <Route path="*" element={<Error404 />} />

                {/*HOME*/}
                <Route path="/" element={<Home />} />
                <Route path="/casos" element={<Cases />} />

                <Route path="/servicios" element={<Services />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/query?s=:term" element={<Search />} />
                <Route path="/category/:slug" element={<Category />} />
                <Route path="/carreras" element={<Careers />} />
                <Route path="/nosotros" element={<Abaout />} />
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes
