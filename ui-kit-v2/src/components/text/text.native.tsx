import React from 'react';
import { StyleProp, Text as NativeText, TextStyle } from 'react-native';
import { TextComponent, TextProps, FontSize, FontWeight } from './interface';

export const Text: TextComponent = (props: TextProps) => {
    const textStyles: StyleProp<TextStyle>[] = [
        getSizeStyle(props.fontSize),
        getWeightStyle(props.fontWeight)
    ];

    return (
        <NativeText style={textStyles}>
            {props.children}
        </NativeText>
    );
}


function getSizeStyle(size: FontSize = FontSize.T2) {
    switch (size) {
        case FontSize.T1: return smallTextStyle;
        case FontSize.T3: return largeTextStyle;
        case FontSize.T2:
        default:
            return mediumTextStyle;
    }
}

function getWeightStyle(weight: FontWeight = FontWeight.Regular) {
    switch (weight) {
        case FontWeight.Light: return lightTextStyle;
        case FontWeight.Bold: return boldTextStyle;
        case FontWeight.Regular:
        default:
            return regularTextStyle;
    }
}

const smallTextStyle: StyleProp<TextStyle> = {
    fontSize: 12
};

const mediumTextStyle: StyleProp<TextStyle> = {
    fontSize: 16
};

const largeTextStyle: StyleProp<TextStyle> = {
    fontSize: 22
};

const lightTextStyle: StyleProp<TextStyle> = {
    fontWeight: '200'
};

const regularTextStyle: StyleProp<TextStyle> = {
    fontWeight: 'normal'
};

const boldTextStyle: StyleProp<TextStyle> = {
    fontWeight: 'bold'
};