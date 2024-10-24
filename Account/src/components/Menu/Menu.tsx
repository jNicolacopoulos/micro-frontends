import React from 'react';
import './Menu.css';

type MenuProps = {
    items: {
        id: number;
        label: string;
    }[];
    user: {
        id: string | number;
        firstName: string;
        lastName: string;
    };
};

export const Menu = (props: MenuProps) => {
    const { items, user } = props;
    return (
        <div className='mf-account-menu-container'>
            <div className='mf-account-menu'>
                <span className='menu-header'>{`${user.firstName} ${user.lastName}`}</span>
                <ul>
                    {items.map((item) => (
                        <MenuItem key={item.id} label={item.label} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export type MenuItemProps = {
    label: string;
};

export const MenuItem = (props: MenuItemProps) => {
    return (
        <li>
            <a href='#' className='mf-account-menu__items'>
                {props.label}
            </a>
        </li>
    );
};
