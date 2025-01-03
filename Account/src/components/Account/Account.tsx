import { css } from '@emotion/react';
import { Avatar } from '../Avatar/Avatar';
import { Menu } from '../Menu/Menu';
import { useState } from 'react';
import accountInfos from '../../data/accounInfos.json';

const containerStyle = css({
    pointerEvents: 'auto',
    cursor: 'pointer',
    zIndex: 1,
});

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
    const [isHovered, setIsHovered] = useState(false);
    const { userId } = props,
        userInfo = accountInfos.find((info) => info.id === userId);

    return userInfo ? (
        <div
            css={containerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {userInfo && <Avatar {...userInfo} />}
            <Menu items={menuItems} user={userInfo} visible={isHovered} />
        </div>
    ) : (
        <div>Guest</div>
    );
};
