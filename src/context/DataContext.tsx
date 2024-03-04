import React, { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

interface IDataContextType {
    children?: React.ReactNode
}

interface IDataContext {
    dataObject: any

    setData: Dispatch<SetStateAction<null | any>>
}


const DataContext = createContext<IDataContext>({
    dataObject: null,
    setData: () => { },
});

export const useData = () => useContext(DataContext);

const DataProvider = ({ children }: IDataContextType) => {
    const [dataObject, setData] = useState(null);
    return (
        <DataContext.Provider value={{ dataObject, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;