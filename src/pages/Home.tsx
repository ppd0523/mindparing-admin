import React from 'react';
import {usePageStatus, useServer} from "../components/DataProvider";
import {Navigate} from "react-router-dom";

function Home() {
    const server = useServer()
    return (
        <main>Home
            <button onClick={server.checkSession}>Session</button>
        </main>
    );
}

export default Home;