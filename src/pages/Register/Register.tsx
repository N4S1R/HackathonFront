// @ts-nocheck
import React, { useState } from 'react';
import styled from 'styled-components';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Button } from '@mui/joy';
import Input from '@mui/joy/Input';
import { useAppDispatch } from '../../store/store';
import { setUser } from '../../store/reducers/user/userSlice';
import { useNavigate } from 'react-router-dom';

const RegisterS = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    gap: 20px;
`;

const Register = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string>()

    const submitRegister = (email: string, password: string) => {
        const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then(({ user }) => {
                    dispatch(
                    setUser({
                        email: user.email,
                        token: user.accessToken,
                        id: user.uid,
                    }))

                    navigate(-1);
                }).catch((e) => {
                    setError(JSON.stringify(e))
                })
                
    };

    return (
        <RegisterS>
            <h2>Регистрация в MVC</h2>
            <Input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='введите email' />
            <Input
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='введите пароль'
            />
            <Button onClick={() => submitRegister(email, password)}>Регистрация</Button>

            {error && <div>Пользователь существует</div>}
        </RegisterS>
    );
};

export default Register;
