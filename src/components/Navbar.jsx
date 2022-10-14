import React from 'react'
import UserLogo from '../images/user.jpg';
import Logo from '../images/butik-icerik-logo-beyaz.png';

const Navbar = () => {
    return (
        <div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-secondary navbar-dark">
                <a href="index.html" class="navbar-brand mx-4 mb-3">
                    <img src={Logo} width="200" />
                </a>
                <div class="navbar-nav w-100">
                    <a href="index.html" class="nav-item nav-link active pb-3 pt-3">Ana Sayfa</a>
                    <a href="index.html" class="nav-item nav-link pb-3 pt-3">Markalar</a>
                    <a href="index.html" class="nav-item nav-link pb-3 pt-3">Editörler</a>
                    <a href="index.html" class="nav-item nav-link pb-3 pt-3">Yazarlar</a>
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
                    <h6 class="mb-0">Jhon Doe</h6>
                    <span>Admin</span><br />
                    <a href="">Çıkış Yap</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar