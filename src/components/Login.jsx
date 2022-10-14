import Logo from '../images/butik-icerik-logo-beyaz.png'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { createUser, signIn } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await createUser(email, password);
            navigate('/')
        } catch (e) {
            setError(e.message)
            toast.error(error)
        }
    }

    const handleSignIn = async (e) => {
        e.preventDefault()
        navigate('/')
        setError('')
        try {
            await signIn(email, password)
        } catch (e) {
            setError(e.message)
            toast.error(error)
        }
    }

    return (
        <div className="container-fluid">
            <div className="row h-100 align-items-center justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <a href="index.html" className="">
                                <h3 className="text-primary"><img src={Logo} width="200" /></h3>
                            </a>
                            <h3>Giriş Yap</h3>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                            <label>E-posta Adresi</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <label>Parola</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label">Beni Hatırla</label>
                            </div>
                            <a href="">Şifremi Unuttum</a>
                        </div>
                        <button type="submit" className="btn btn-primary py-3 w-100 mb-4" onClick={handleSignIn}>Giriş Yap</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login