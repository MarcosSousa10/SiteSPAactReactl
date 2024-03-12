import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Index";
import Services from '../src/pages/Services/index';
import Contato from '../src/pages/Contato/index';
import Header from "./Componentes/Header/index";
import Footer from "./Componentes/Footer/index";
import './style.css';

function App() {

    return ( <
        BrowserRouter >
        <
        Header / >
        <
        Routes >
        <
        Route path = '/'
        element = { < Home / > }
        /> <
        Route path = '/services'
        element = { < Services / > }
        /> <
        Route path = '/contato'
        element = { < Contato / > }
        /> < /
        Routes > <
        Footer / >
        <
        /BrowserRouter> 

    );
}

export default App;