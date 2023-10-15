import React from 'react';
import { useAppSelector } from '../../store/store';
import { userSelector } from '../../store/reducers/user/userSlice.selector';

const Profile = () => {
    const user = useAppSelector(userSelector);
    return (
        <div>
            <div>
                <h3>{user.email}</h3>
            </div>
        </div>
    );
};

export default Profile;
