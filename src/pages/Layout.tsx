import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header/Header';

const PageBody = styled.div`
    padding: 40px;
`

const Layout = () => {
    return (
        <div>
            <Header />
            <PageBody>
                <Outlet />
            </PageBody>
        </div>
    );
};

export default Layout;
