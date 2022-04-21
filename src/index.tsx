import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Main from "./pages/Main";


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="login" element={<Login/>}/>
          <Route path="main" element={<Main/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

