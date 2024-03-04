import React, { ReactNode } from 'react';

interface WrapperType {
    title?: string,
    children: ReactNode
}
export const Wrapper: React.FC<WrapperType> = ({ title, children }) => {
    return (
        <>
            <h5 className=" font-bold">{title}</h5>
            {children}
        </>
    )
}