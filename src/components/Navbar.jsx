import React, { useState } from 'react'
import UserLogo from '../images/user.jpg';
import Logo from '../images/butik-icerik-logo-beyaz.png';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { auth } from '../firebase';
import { useSiteContext } from '../context/SiteContext';

const Navbar = () => {
    const [isActive, setIsActive] = useState();

    const { profile, setMenuToggle, menuToggle, toggleHandle } = useSiteContext();




    return (
        <div className={classNames({
            "sidebar pe-4 pb-3": true,
            "open": menuToggle,
        })} >
            <nav className="navbar bg-secondary navbar-dark">
                <div className="navbar-nav w-100">
                    <Link to={"/"} className={classNames({
                        "nav-item nav-link pb-3 pt-3": true,
                        "active": window.location.pathname === "/"
                    })} onClick={() => setIsActive("a")}>Ana Sayfa</Link>
                    <Link to={"/brands"} className={classNames({
                        "nav-item nav-link pb-3 pt-3": true,
                        "active": window.location.pathname === "/brands"
                    })} onClick={() => setIsActive("b")}>Markalar</Link>
                    <Link to={"/editors"} className={classNames({
                        "nav-item nav-link pb-3 pt-3": true,
                        "active": window.location.pathname === "/editors"
                    })} onClick={() => setIsActive("c")} >Editörler</Link>
                    <Link to={"/"} className="nav-item nav-link  pb-3 pt-3" >Yazarlar</Link>

                </div>
            </nav>

            <div className="d-flex position-absolute align-items-center ms-4 mb-4 bottom-0">
                <div className="position-relative">
                    <img className="rounded-circle" src={UserLogo} alt="" />
                    <div
                        className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1">
                    </div>
                </div>
                <div className="ms-3">
                    <h6 className="mb-0"> {JSON.parse(localStorage.getItem("userIds"))?.email} </h6> {/* user.name */}
                    {
                        profile && profile[0].userLevel === "0" ? <span>Yazar</span> : profile && profile[0].userLevel === "1" ? <span>Editör</span> : profile && profile[0].userLevel === "3" ? <span>Marka</span> : <span>Admin</span>
                    }
                    <br /> {/* user.level */}
                    <Link onClick={() => auth.signOut()}>Çıkış Yap</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar