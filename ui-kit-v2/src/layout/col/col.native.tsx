import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { ColComponent, ColProps } from './interface';

export const Col: ColComponent = (props: ColProps) => {
    return (
        <View style={colStyle}>
            {props.children}
        </View>
    );
};

const colStyle: StyleProp<ViewStyle> = {
    display: 'flex',
    flexDirection: 'column'
};