import React from 'react';
import { Avatar } from '../Avatar/Avatar';
import { Menu } from '../Menu/Menu';
import './Account.css';
import accountInfos from '../../data/accounInfos.json';

const menuItems = [
    {
        id: 1,
        label: 'Account Details',
    },
    {
        id: 2,
        label: 'Order History',
    },
    {
        id: 3,
        label: 'Log Out',
    },
];

export type AccountProps = {
    userId?: string;
};
export const Account = (props: AccountProps) => {
    const { userId } = props,
        userInfo = accountInfos.find((info) => info.id === userId);

    return userInfo ? (
        <div className='mf-account-container'>
            {userInfo && <Avatar {...userInfo} />}
            <Menu items={menuItems} user={userInfo} />
        </div>
    ) : (
        <div>Guest</div>
    );
};
