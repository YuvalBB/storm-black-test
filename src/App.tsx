import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/screens/Home/Home';
import Subscribe from './components/screens/Subscribe/Subscribe';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar/>
            <Route path="/" exact component={Home}/>
            <Route path="/home/" component={Home}/>
            <Route path="/subscribe/" component={Subscribe}/>
        </Router>
    );
};

export default App;
