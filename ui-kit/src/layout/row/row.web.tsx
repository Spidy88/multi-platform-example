import React from 'react';
import { RowComponent, RowProps } from './interface';

export const Row: RowComponent = (props: RowProps) => {
    return (
        <div className="flex flex-row">
            {props.children}
        </div>
    );
}
