import React from 'react';
import cx from 'classnames';
import {
    ButtonComponent,
    ButtonProps,
    ButtonSize,
    ButtonVariant
} from './interface';

export const Button: ButtonComponent = (props: ButtonProps) => {
    const sizeStyle = getSizeStyle(props.size);
    const variantStyle = - getVariantStyle(props.variant);

    return (
        <button
            className={cx(sizeStyle, variantStyle)}
            onClick={props.onPress}
        >
            {props.text}
        </button>
    );
};

function getSizeStyle(size: ButtonSize = ButtonSize.Medium) {
    switch (size) {
        case ButtonSize.Small: return 'btn-sm';
        case ButtonSize.Large: return 'btn-lg';
        case ButtonSize.Medium:
        default:
            return 'btn-md';
    }
}

function getVariantStyle(variant: ButtonVariant = ButtonVariant.Secondary) {
    switch (variant) {
        case ButtonVariant.Primary: return 'btn-primary';
        case ButtonVariant.Tertiary: return 'btn-tertiary';
        case ButtonVariant.Secondary:
        default:
            return 'btn-secondary';
    }
}