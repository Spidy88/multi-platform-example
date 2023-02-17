import React from 'react';
import cx from 'classnames';
import { TextComponent, TextProps, FontSize, FontWeight } from './interface';

export const Text: TextComponent = (props: TextProps) => {
    const fontSizeStyle = getSizeStyle(props.fontSize);
    const fontWeightStyle = getWeightStyle(props.fontWeight);

    return (
        <span className={cx(fontSizeStyle, fontWeightStyle)}>
            {props.children}
        </span>
    );
}

function getSizeStyle(size: FontSize = FontSize.T2) {
    switch (size) {
        case FontSize.T1: return 'font-sm';
        case FontSize.T3: return 'font-lg';
        case FontSize.T2:
        default:
            return 'font-md';
    }
}

function getWeightStyle(weight: FontWeight = FontWeight.Regular) {
    switch (weight) {
        case FontWeight.Light: return 'font-light';
        case FontWeight.Bold: return 'font-bold';
        case FontWeight.Regular:
        default:
            return 'font-regular';
    }
}
