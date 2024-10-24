import React from 'react';
import './Avatar.css';

export type AvatarProps = {
    firstName: string;
    lastName: string;
};
export const Avatar = (props: AvatarProps) => {
    const { firstName, lastName } = props,
        initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

    return (
        <div className='mf-account-avatar'>
            <span className='mf-account-avatar__content'>{initials}</span>
        </div>
    );
};
