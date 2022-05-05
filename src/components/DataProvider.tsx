import React, {
    ReactNode,
    createContext,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';


type DataConnectionContextType = {
    status?: string
}

const dbConext = createContext<DataConnectionContextType>({})
const useConnection = ()=>{
    return useContext(dbConext);
}

type PageStatusContextType = {
    currentPage: string;
    isLogin: boolean;
    setPage?: Dispatch<SetStateAction<string>>,
    setLogin?: Dispatch<SetStateAction<boolean>>,
}
const pageStatusContext = createContext<PageStatusContextType>({
    currentPage: 'HOME',
    isLogin: false,
    setPage: undefined,
    setLogin: undefined,
});
const usePageStatus = ()=>{
    return useContext(pageStatusContext);
}

interface IDataProvider {
    children?: ReactNode;
}
function DataProvider(props: IDataProvider) {
    const [isLogin, setLogin] = useState<boolean>(false);
    const [currentPage, setPage] = useState<string>('HOME');

    const defaultConnection = {
        status: 'disconnected',

    };
    const defaultPageStatus = {
        currentPage,
        isLogin,
        setPage,
        setLogin,
    };
    return (
        <dbConext.Provider value={defaultConnection}>
            <pageStatusContext.Provider value={defaultPageStatus}>
                {props.children}
            </pageStatusContext.Provider>

        </dbConext.Provider>
    );
}

export {
    DataProvider,
    useConnection,
    usePageStatus,
};