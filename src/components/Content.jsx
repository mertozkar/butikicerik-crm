import React from 'react'
import { useSiteContext } from '../context/SiteContext'
import Editors from './Editors';
import BrandsDetail from './BrandsDetail';
import EditorDetail from './EditorDetail';
import Customer from './Customer';
import Archive from './Archive';
import Notifications from './Notifications';
import classNames from 'classnames';
import { Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import AdminHome from './AdminHome';
import Brands from './Brands';
import Posts from './Posts';

const Content = () => {

    const { menuToggle } = useSiteContext();

    return (
        <div className={classNames({
            "content": true,
            "open": menuToggle,
        })}>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<AdminHome />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/editors" element={<Editors />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/brand-details" element={<BrandsDetail />} />
                <Route path='/editor-details' element={<EditorDetail />} />
                <Route path='/posts' element={<Posts />} />
            </Routes>
        </div>
    )
}

export default Content