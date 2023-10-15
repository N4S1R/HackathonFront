import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { modalSelector } from '../../store/reducers/Modal/modalSlice.selector';
import { modalHandler } from '../../store/reducers/Modal/modalSlice';

const ModalBlockS = styled.div`
      width: 100%;
      height: 100vh;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      z-index: 1;
      background-color: #00000044;
      cursor: pointer;
`

const ModalContent = styled.div`
      background-color: white;
      padding: 15px;
      position: absolute;
      z-index: 3px;
      border-radius: 15px;
      cursor: auto;
`

interface ModalProps {
      children: React.ReactNode
}
const Modal:React.FC<ModalProps> = ({children}) => {
      const dispatch = useAppDispatch()
      return (
            <ModalBlockS onClick={() => {
                  dispatch(modalHandler())
            }}>
                  <ModalContent onClick={(e) => {
                        e.stopPropagation()
                  }}>
                        {children}
                  </ModalContent>
            </ModalBlockS>
      );
};

export default Modal;