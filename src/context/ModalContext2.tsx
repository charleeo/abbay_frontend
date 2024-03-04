import React, { createContext, useContext, useEffect, useState, Dispatch, SetStateAction } from 'react';


interface IModalContextType {
    children?: React.ReactNode
}

interface IModalContext {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<null | any>>
    isClose?: boolean
}


const ModalContext = createContext<IModalContext>({
    isOpen: false,
    setIsOpen: () => { },
    isClose: false
});

export const useModal = () => useContext(ModalContext);

const ModalProvider2 = ({ children }: IModalContextType) => {
    const [isOpen, setIsOpen] = useState(Boolean);

    const [isClose, setIsClose] = useState(Boolean);
    useEffect(() => {
        const modalIsOpen = async () => {
            setIsClose(isClose);
            setIsOpen(isOpen);
        };

        modalIsOpen();
    }, [isClose, isOpen]);
    return (
        <ModalContext.Provider value={{ setIsOpen, isOpen, isClose }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider2;