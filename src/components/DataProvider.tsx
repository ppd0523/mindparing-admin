import React, {
    ReactNode,
    createContext,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';
import axios from "axios";

const SERVER_URL = "http://ec2-3-35-99-11.ap-northeast-2.compute.amazonaws.com:9001"


type DataConnectionContextType = {
    status?: string;
    login: any;
}
const dbConext = createContext<DataConnectionContextType>({} as DataConnectionContextType);
const useServer = ()=>{
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
        login: async (id:string, hashed_passwd:string)=>{
            const res = await axios.post(
              `${SERVER_URL}/v1/admin/login`,
              {id: id, hashed_passwd: hashed_passwd}
            );
            console.log(res);
        }
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
    useServer,
    usePageStatus,
};