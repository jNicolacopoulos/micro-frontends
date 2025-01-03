import { css } from '@emotion/react';

const menuContainerStyles = css({
    position: 'relative',
    left: '50%',
    display: 'none',
});

const menuVisibleStyle = css({
    display: 'block',
});

const accountMenuStyles = css({
    fontSize: '11px',
    position: 'absolute',
    width: 'max-content',
    border: '1px solid #888',
    top: '0',
    left: '0',
    transform: 'translateX(-50%)',
    '& .menu-header': {
        textTransform: 'uppercase',
        fontSize: '10px',
        display: 'flex',
        justifyContent: 'center',
        lineHeight: '15px',
    },
    '& ul': {
        listStyleType: 'none',
        background: 'white',
        padding: '18px 8px',
        marginTop: '4px',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    '& li': {
        marginBottom: '10px',
        paddingLeft: '12px',
        paddingRight: '12px',
        lineHeight: '1.5em',
        '& a': {
            textDecoration: 'none',
            color: 'black',
            '&:hover': {
                textDecoration: 'underline',
            },
        },
    },
});

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
    visible?: boolean;
};

export const Menu = (props: MenuProps) => {
    const { items, user, visible } = props;
    return (
        <div css={[menuContainerStyles, visible && menuVisibleStyle]}>
            <div css={accountMenuStyles}>
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
