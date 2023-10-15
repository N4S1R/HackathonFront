import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useGetCarByIdQuery } from '../../store/reducers/Modal/carsApi/cars';
import styled from 'styled-components';
import { Rating } from '@mui/material';

const ProductPageS = styled.div`
    box-shadow: 9px -1px 39px rgba(0, 0, 0, 0.391);
      border-radius: 15px;
      width: 100%;
      display: flex;
      gap: 30px;
`

const ImageS = styled.img`
      width: 30%;
      border-radius: 15px 0 0 15px;
      background-size: cover;
      background-repeat: no-repeat;
`

const ProductInfo = styled.div`
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 20px;
`

const ProductPage = () => {
      const params = useLocation().pathname.split("/").at(-1)
      const {data, isLoading} = useGetCarByIdQuery(params) 

      if(isLoading) {
            return <h3>Loading..</h3>
      }
      return (
            <ProductPageS>
                  <ImageS src={data.img} alt=''/>
                  <ProductInfo>
                        <div>
                              <h2>{data.name}</h2>
                              <span>{data.description}</span>
                        </div>
                    <Rating name='pruduct-rating' value={data.rating} />
                  </ProductInfo>
            </ProductPageS>
      );
};

export default ProductPage;