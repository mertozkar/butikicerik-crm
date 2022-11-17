import React from 'react'
import { MdMenu, MdClose } from 'react-icons/md';
import { useSiteContext } from '../context/SiteContext';

const Footer = () => {

    const { toggleHandle, menuToggle } = useSiteContext();

    return (
        <div onClick={toggleHandle} className="ms-3 float-menu  btn btn-lg btn-lg-circle btn-primary mb-3 ml-3 rounded">
            {menuToggle && menuToggle ? <MdClose className="pointer" /> : <MdMenu className="pointer" />}
        </div>
    )
}

export default Footer