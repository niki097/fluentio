import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Navbar } from './components/User/Navbar';
import HomePage from './components/HomePage/HomePage';
import { Login } from './components/User/Login';
import { Signup } from './components/User/Signup';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="min-h-screen bg-gray-50">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        {/* Add more routes as needed */}
                    </Routes>
                </div>
            </Router>
            <ToastContainer position="top-right" />
        </Provider>
    );
}

export default App;
