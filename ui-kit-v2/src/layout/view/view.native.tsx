import React from 'react';
import { View as NativeView } from 'react-native';
import { ViewComponent, ViewProps } from './interface';

export const View: ViewComponent = (props: ViewProps) => {
    return (
        <NativeView>{props.children}</NativeView>
    );
}