import React, {
    ReactNode,
    createContext,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';
import axios from "axios";


type DataConnectionContextType = {
    status?: string;
    login: any;
    checkSession: any;
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
        checkSession: async ()=>{
            axios.get('v1/getSession')
              .then(response=>{
                  console.log(response);
              })
        },
        login: async (id:string, hashed_passwd:string)=>{

            axios.post(`/v1/admin/login`, {id, hashed_passwd})
              .then(response=>{
                  if (response.status !== 200)
                    throw Error("No server response");

                  return response.data
              })
              .then(data=>{
                  console.log(data);
                  // errorCode: null, {status: 'LOGIN'}
                  // 이미 로그인 errorCode: login-001, httpStatus: 400
                  // 로그인 안 돼있음 errorCode: login-002, httpStatus: 400
                  // 아디나 비번 틀림 errorCode: login-003, httpStatus: 400
              });
        },
        getUsers: async ()=>{
            axios.get('/v1/admin/users')
        },
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