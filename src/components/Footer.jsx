import React from 'react'
import { MdEmojiFlags } from 'react-icons/md';
import { useSiteContext } from '../context/SiteContext';

const Footer = () => {

    const { toggleHandle, menuToggle } = useSiteContext();

    return (
        <div></div>
        // <div className="ms-3 float-menu  btn btn-lg btn-lg-circle btn-primary mb-3 ml-3 rounded">
        //     <MdEmojiFlags className="pointer" />
        // </div>
    )
}

export default Footer