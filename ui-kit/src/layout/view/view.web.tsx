import React from 'react';
import { ViewComponent, ViewProps } from './interface';

export const View: ViewComponent = (props: ViewProps) => {
    return (
        <div>{props.children}</div>
    );
}