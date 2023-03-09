import React from 'react';
import { ColComponent, ColProps } from './interface';

export const Col: ColComponent = (props: ColProps) => {
    return (
        <div className="flex flex-col">
            {props.children}
        </div>
    );
}
