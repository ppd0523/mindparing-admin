import React from 'react';
import {usePageStatus} from "../components/DataProvider";
import {Navigate} from "react-router-dom";

function Home() {
    const pageStatus = usePageStatus();
    pageStatus.setLogin(true);
    return (
        <main>
            {pageStatus.isLogin ? "너는 로그인 돼있다" : <Navigate to="/login" />}
        </main>
    );
}

export default Home;