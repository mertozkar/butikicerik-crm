import React, { useState } from 'react'
import UserLogo from '../images/user.jpg';
import Logo from '../images/butik-icerik-logo-beyaz.png';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Navbar = () => {
    const [isActive, setIsActive] = useState();

    return (
        <div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-secondary navbar-dark">
                <a href="index.html" class="navbar-brand mx-4 mb-3">
                    <img src={Logo} width="200" />
                </a>
                <div class="navbar-nav w-100">
                    <Link to={"/"} className={classNames({
                        "nav-item nav-link pb-3 pt-3": true,
                        "active": window.location.pathname === "/"
                    })}  onClick={() => setIsActive("a")}>Ana Sayfa</Link>
                    <Link to={"/brands"} className={classNames({
                        "nav-item nav-link pb-3 pt-3": true,
                        "active": window.location.pathname === "/brands"
                    })} onClick={() => setIsActive("b")}>Markalar</Link>
                    <Link to={"/"} className="nav-item nav-link  pb-3 pt-3" >Editörler</Link>
                    <Link to={"/"} className="nav-item nav-link  pb-3 pt-3" >Yazarlar</Link>

                </div>
            </nav>

            <div class="d-flex position-absolute align-items-center ms-4 mb-4 bottom-0">
                <div class="position-relative">
                    <img class="rounded-circle" src={UserLogo} alt="" />
                    <div
                        class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1">
                    </div>
                </div>
                <div class="ms-3">
                    <h6 class="mb-0">Jhon Doe</h6> {/* user.name */}
                    <span>Admin</span><br /> {/* user.level */}
                    <a href="">Çıkış Yap</a> {/* logout */}
                </div>
            </div>
        </div>
    )
}

export default Navbar