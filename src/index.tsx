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
import UserList from "./pages/UserList";
import PostList from "./pages/PostList";
import WriteMagazine from "./pages/WriteMagazine";
import MagazineList from "./pages/MagazineList";
import NoticeList from "./pages/NoticeList";
import QnAList from "./pages/QnAList";
import ManageCoupon from "./pages/ManageCoupon";


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="login" element={<Login/>}/>
          <Route path="users" element={<UserList/>}/>
          <Route path="posts" element={<PostList/>}/>
          <Route path="write/magazine" element={<WriteMagazine/>}/>
          <Route path="magazines" element={<MagazineList/>}/>
          <Route path="notices" element={<NoticeList/>}/>
          <Route path="gnas" element={<QnAList/>}/>
          <Route path="manage/coupons" element={<ManageCoupon/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

