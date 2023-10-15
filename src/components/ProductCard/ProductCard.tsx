import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import styled from 'styled-components';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ProductCardS = styled.div`
      overflow: hidden;
    width: 300px;
    border-radius: 15px;
    box-shadow: 9px -1px 39px rgba(0, 0, 0, 0.391);
    transition: 200ms ease-in-out;

    &:hover {
        transform: scale(102%);
    }
`;

const ProductCardImageS = styled.img`
    /* width: 300px; */
    border-radius: 15px 15px 0 0;
    height: 400px;
    background-position: center;
  /* определяет размер изображения на странице */
      background-size: cover;
      background-repeat: no-repeat;
    position: relative;
    cursor: pointer;

`;

const ProductCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 10px;
`;

const ProductCardHeading = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductCardPrice = styled.div`
    display: flex;
    gap: 5px;
`;

const ProductEditIcons = styled(MoreVertIcon)`
    color: white;
    position: absolute;
    top: 15px;
    right: 10px;
`;

const Product = styled.div`
    position: relative;
`;

interface ProductCardProps {
      id: string,
      name: string,
      description: string,
      img: string
      ownerId: string
      rating: number,
      priceOfHours: number,

}

const ProductCard = ({id, img, name, rating, ownerId ,description,priceOfHours}: ProductCardProps) => {
    const [isOnMouse, setIsOnMouse] = useState(false);
    const navigate = useNavigate()
    const {isAuth} = useAuth()
    let userId 
    if(isAuth) {
        userId = JSON.parse(localStorage.getItem('user')!).id;
    }

    return (
        <ProductCardS onMouseEnter={() => setIsOnMouse(true)} onMouseLeave={() => setIsOnMouse(false)}>
            <Product>
                <ProductCardImageS
                    src={img}
                    alt=''
                    onClick={() => {
                        navigate(`/product/${id}`)
                    }}                
                />
                {"jw3xSTjvjOS2cGwroOzvftjCIiE2" === userId && isOnMouse && <ProductEditIcons />}
            </Product>

            <ProductCardContent>
                <ProductCardHeading>
                    <h3>{name}</h3>
                    <Rating name='pruduct-rating' value={rating} />
                </ProductCardHeading>
                <div>Avtomobil əla vəziyyətdədir. Heç bir problemi yoxdur. Koreyadan yeni gəlib.</div>
                <ProductCardPrice>
                    <b>{priceOfHours}₼</b>
                    <span>за час</span>
                </ProductCardPrice>
            </ProductCardContent>
        </ProductCardS>
    );
};

export default ProductCard;


