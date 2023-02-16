import React from 'react';
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from 'react-native';
import { ButtonComponent, ButtonProps, ButtonSize, ButtonVariant } from './interface';

export const Button: ButtonComponent = (props: ButtonProps) => {
    const textStyles = getTextStyles(props);
    const buttonStyles = getButtonStyles(props);

    return (
        <Pressable
            style={buttonStyles}
            onPress={props.onPress}
        >
            <Text style={textStyles}>
                {props.text}
            </Text>
        </Pressable>
    );
}

function getButtonStyles(props: ButtonProps) {
    const styles: StyleProp<ViewStyle>[] = [];

    switch (props.size) {
        case ButtonSize.Small:
            styles.push(smallButtonStyle);
            break;

        case ButtonSize.Large:
            styles.push(largeButtonStyle);
            break;

        case ButtonSize.Medium:
        default:
            styles.push(mediumButtonStyle);
    }

    switch (props.variant) {
        case ButtonVariant.Primary:
            styles.push(primaryButtonStyle);
            break;

        case ButtonVariant.Tertiary:
            styles.push(tertiaryButtonStyle);
            break;

        case ButtonVariant.Secondary:
        default:
            styles.push(secondaryButtonStyle);
    }

    return styles;
}

function getTextStyles(props: ButtonProps) {
    const styles: StyleProp<TextStyle>[] = [];

    switch (props.size) {
        case ButtonSize.Small:
            styles.push(smallTextStyle);
            break;

        case ButtonSize.Large:
            styles.push(largeTextStyle);
            break;

        case ButtonSize.Medium:
        default:
            styles.push(mediumTextStyle);
    }

    switch (props.variant) {
        case ButtonVariant.Primary:
            styles.push(primaryTextStyle);
            break;

        case ButtonVariant.Tertiary:
            styles.push(tertiaryTextStyle);
            break;

        case ButtonVariant.Secondary:
        default:
            styles.push(secondaryTextStyle);
    }

    return styles;
}

const largeButtonStyle: StyleProp<ViewStyle> = {
    paddingHorizontal: 16,
    paddingVertical: 12
};

const mediumButtonStyle: StyleProp<ViewStyle> = {
    paddingHorizontal: 12,
    paddingVertical: 8
};

const smallButtonStyle: StyleProp<ViewStyle> = {
    paddingHorizontal: 8,
    paddingVertical: 4
};

const primaryButtonStyle: StyleProp<ViewStyle> = {
    backgroundColor: '#028dbb'
};

const secondaryButtonStyle: StyleProp<ViewStyle> = {
    backgroundColor: '#dadada'
};

const tertiaryButtonStyle: StyleProp<ViewStyle> = {
    backgroundColor: 'none',
    borderColor: 'none',
    borderWidth: 0
};

const largeTextStyle: StyleProp<TextStyle> = {
    fontSize: 22
};

const mediumTextStyle: StyleProp<TextStyle> = {
    fontSize: 16
};

const smallTextStyle: StyleProp<TextStyle> = {
    fontSize: 12
};

const primaryTextStyle: StyleProp<TextStyle> = {
    color: '#ffffff'
};

const secondaryTextStyle: StyleProp<TextStyle> = {
    color: '#212121'
};

const tertiaryTextStyle: StyleProp<TextStyle> = {
    color: '#0050b3'
};
