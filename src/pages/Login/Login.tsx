// @ts-nocheck
import React, { useState } from 'react';
import { Button } from '@mui/joy';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Input from '@mui/joy/Input';
import { useAppDispatch } from '../../store/store';
import { setUser } from '../../store/reducers/user/userSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from '../../hooks/useAuth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

const LoginS = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    gap: 20px;
`

const Login = () => {
    const dispath = useAppDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string>();
    const [password, setPassword] = useState('');
    const {isAuth} = useAuth()

    if(isAuth) {
        navigate(-1)
    }

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispath(
                    setUser({
                        email: user.email,
                        token: user.accessToken,
                        id: user.uid,
                    })
                );
            })
            .catch(e => {
                setError(JSON.stringify(e));
            });
            navigate(-1);
    };

    return (
        <LoginS>
            <IconButton onClick={() => navigate("/")}><ArrowBackIcon /></IconButton>
            <h2>Войти аккаунт в MVC</h2>
            <Input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='введите email' />
            <Input
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='введите пароль'
            />
            <Button onClick={() => handleLogin(email, password)}>Войти</Button>
            {error && <div>Данные не верны</div>}
        </LoginS>
    );
};

export default Login;
