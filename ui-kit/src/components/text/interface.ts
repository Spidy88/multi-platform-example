import React from 'react';

export type TextComponent = React.FC<TextProps>;
export type TextProps = React.PropsWithChildren<{
    fontSize?: FontSize;
    fontWeight?: FontWeight;
}>;

export enum FontSize {
    T1,
    T2,
    T3
};

export enum FontWeight {
    Light,
    Regular,
    Bold
};
