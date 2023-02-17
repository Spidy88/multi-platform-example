import React from 'react';

export type ButtonComponent = React.FC<ButtonProps>;

export type ButtonProps = {
    size?: ButtonSize;
    variant?: ButtonVariant;
    text: string;
    onPress: () => void;
};

export enum ButtonSize {
    Small = 'sm',
    Medium = 'md',
    Large = 'lg'
};

export enum ButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary',
    Tertiary = 'tertiary'
};
