import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CarRentalIcon from '@mui/icons-material/CarRental';
import useAuth from '../../hooks/useAuth';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../store/store';
import { modalHandler } from '../../store/reducers/Modal/modalSlice';

const HeaderS = styled.div`
    padding: 24px 160px;
    border-bottom: 1px solid #d1d5db;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HeaderNavigationS = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;

const HeaderBurgerMenuS = styled.div`
    display: flex;
    padding: 8px 8px 8px 16px;
    align-items: center;
    gap: 8px;
    border-radius: 100px;
    border: 1px solid var(--gray-200, #e5e7eb);
    background: var(--white, #fff);
    cursor: pointer;
    transition: 400ms ease-in-out;

    &:hover {
        box-shadow: 9px -1px 39px 2px rgba(0, 0, 0, 0.21);
        -webkit-box-shadow: 9px -1px 39px 2px rgba(0, 0, 0, 0.21);
        -moz-box-shadow: 9px -1px 39px 2px rgba(0, 0, 0, 0.21);
    }
`;

const HeaderDropDownMenuS = styled.div`
    border-radius: 10px;
    position: absolute;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 24px;
    top: 80px;
    right: 90px;
    z-index: 10;
    box-shadow: 9px -1px 39px rgba(0, 0, 0, 0.391);
`;

const LinkS = styled(Link)`
    text-decoration: none;
    color: #000;
    padding: 10px 15px;
    border-radius: 10px;
    transition: 200ms ease-in;

    &:hover {
        background-color: #efefef;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

function Header() {
    const [burgerIsOpen, setBurgerMenuIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const { isAuth } = useAuth();

    const burgerMenuHandler = () => {
        setBurgerMenuIsOpen(prev => !prev);
    };

    return (
        <>
            <HeaderS>
                <Logo>
                    <CarRentalIcon /> <h2>MVS</h2>
                </Logo>
                <HeaderNavigationS>
                    {isAuth && (
                        <Button
                            color='info'
                            onClick={() => {
                                dispatch(modalHandler());
                            }}
                        >
                            Сдать машину в аренду
                        </Button>
                    )}
                    <HeaderBurgerMenuS onClick={burgerMenuHandler}>
                        <MenuIcon />
                        <AccountCircleIcon />
                    </HeaderBurgerMenuS>
                </HeaderNavigationS>
            </HeaderS>
            {isAuth
                ? burgerIsOpen && (
                      <HeaderDropDownMenuS>
                          <div>
                              <LinkS to='profile'>Профиль</LinkS>
                          </div>
                          <div>
                              <LinkS to=''>Настройки</LinkS>
                          </div>
                      </HeaderDropDownMenuS>
                  )
                : burgerIsOpen && (
                      <HeaderDropDownMenuS>
                          <div>
                              <LinkS to='register'>Зарегистрироваться</LinkS>
                          </div>
                          <div>
                              <LinkS to='login'>Войти</LinkS>
                          </div>
                      </HeaderDropDownMenuS>
                  )}
        </>
    );
}

export default Header;

<HeaderDropDownMenuS>
    <div>
        <LinkS to='register'>Зарегистрироваться</LinkS>
    </div>
    <div>
        <LinkS to='login'>Войти</LinkS>
    </div>
</HeaderDropDownMenuS>;
