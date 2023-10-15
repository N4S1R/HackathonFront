import Modal from '../../components/Modal/Modal';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/store';
import { modalSelector } from '../../store/reducers/Modal/modalSlice.selector';
import LinearProgress from '@mui/joy/LinearProgress';
import { Input } from '@mui/joy';
import { Button } from '@mui/material';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useFetchCarsQuery } from '../../store/reducers/Modal/carsApi/cars';

const CreateFormS = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const ProgressS = styled.div`
    display: flex;
    width: 100%;
`;

const steps = [1, 2, 3];

const ProductS = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`;

const Home = () => {
    const { isOpen } = useAppSelector(modalSelector);
    const { data, isLoading } = useFetchCarsQuery();

    const [stepsCount, setStepCount] = useState(1);
    if(isLoading) {
        return <h2>Насир кроос</h2>
    }

    console.log(data)

    return (
        <div>
            {isOpen && (
                <Modal>
                    <div>
                        <h3>Регистрация машины</h3>
                        <ProgressS>
                            <LinearProgress determinate value={1 * 33.3} />
                        </ProgressS>
                        <CreateFormS>
                            <Input />
                        </CreateFormS>
                        <Button variant='outlined'>Далее</Button>
                    </div>
                </Modal>
            )}
            <ProductS>
                {data?.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        description={product.description}
                        img={product.img}
                        name={product.name}
                        ownerId={product.ownerId}
                        priceOfHours={product.priceOfHours}
                        rating={product.rating}
                    />
                ))}
            </ProductS>
        </div>
    );
};

export default Home;
