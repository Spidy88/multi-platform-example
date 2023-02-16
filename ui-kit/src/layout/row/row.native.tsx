import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { RowComponent, RowProps } from './interface';

export const Row: RowComponent = (props: RowProps) => {
    return (
        <View style={rowStyle}>
            {props.children}
        </View>
    );
};

const rowStyle: StyleProp<ViewStyle> = {
    display: 'flex',
    flexDirection: 'row'
};