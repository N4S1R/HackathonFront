import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import AuthGuard from './pages/AuthGuard/AuthGuard';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import AdminGuard from './pages/AdminGuard/AdminGuard';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

import { useDispatch } from 'react-redux';
import { setUser } from './store/reducers/user/userSlice';
import ProductPage from './pages/ProductPage/ProductPage';
import { useAppSelector } from './store/store';
import { modalSelector } from './store/reducers/Modal/modalSlice.selector';
import Modal from './components/Modal/Modal';


function App() {
    const dispatch = useDispatch()
    const { isOpen } = useAppSelector(modalSelector);

    useEffect(() => {
        if(localStorage.getItem("user")) {
            dispatch(setUser(JSON.parse(localStorage.getItem("user")!)))
        }
    })
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Navigate to='home' />} />
                        <Route path='home' element={<Home />} />
                        <Route element={<AuthGuard />}>
                            <Route path='profile' element={<Profile />} />
                            <Route path='product/:id' element={<ProductPage />} />
                            <Route element={<AdminGuard />}>
                                <Route path='adminpanel' element={<AdminPanel />} />
                            </Route>
                        </Route>
                    </Route>
                    <Route path='register' element={<Register />}/>
                    <Route path='login' element={<Login />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;



// Для нашего веб приложения мы используем такоей стек:
// 
// 