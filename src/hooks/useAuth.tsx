import React from 'react';
import { useAppSelector } from '../store/store';
import { userSelector } from '../store/reducers/user/userSlice.selector';

const useAuth = () => {
      const { email, id, token } = useAppSelector(userSelector)

      return {
            isAuth: email ? true : false,
            email,
            token,
            id
      };
};

export default useAuth;