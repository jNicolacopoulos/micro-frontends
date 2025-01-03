import { css } from '@emotion/react';

const avatarStyle = css({
    display: 'flex',
    borderRadius: '50%',
    border: '1px solid',
    borderColor: 'black',
    width: '32px',
    height: '32px',
    placeItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
});

const contentStyle = css({
    fontSize: '1em',
    color: 'white',
});

export type AvatarProps = {
    firstName: string;
    lastName: string;
};
export const Avatar = (props: AvatarProps) => {
    const { firstName, lastName } = props,
        initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

    return (
        <div css={avatarStyle}>
            <span css={contentStyle}>{initials}</span>
        </div>
    );
};
