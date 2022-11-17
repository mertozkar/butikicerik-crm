import React from 'react'
import { useSiteContext } from '../context/SiteContext'
import { MdClose, MdMenu } from 'react-icons/md';
import Logo from '../images/butik-icerik-logo-beyaz.png';

const Header = () => {

    const { toggleHandle, menuToggle } = useSiteContext();
    return (

        <div className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
            <img src={Logo} alt="" width="200" />
            <div className="navbar-nav align-items-center ms-auto">
                <div onClick={toggleHandle} className="ms-3  btn btn-lg btn-lg-circle btn-primary mb-2 ml-3 mt-2 rounded">
                    {menuToggle && menuToggle ? <MdClose className="pointer" /> : <MdMenu className="pointer" />}
                </div>
            </div>
        </div>

    )
}

export default Header