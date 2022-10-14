import Logo from '../images/butik-icerik-logo-beyaz.png'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignUp = () => {

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
            <div className="row h-100 align-items-center justify-content-center" >
                <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <a href="index.html" className="">
                                <h3 className="text-primary"><img src={Logo} width="200" /></h3>
                            </a>
                        </div>
                        <h3 className='text-center mb-3'>Kayıt Ol</h3>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                            <label for="floatingInput">E-posta Adresi</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <label for="floatingPassword">Parola</label>
                        </div>
                        <select className="form-select form-select-lg mb-3" aria-label="Default select example">
                            <option selected>Kullanıcı Tipi</option>
                            <option value="1">Yazar</option>
                            <option value="2">Editör</option>
                            <option value="3">Admin</option>
                        </select>
                        <button type="submit" className="btn btn-primary py-3 w-100 mb-4" onClick={handleSubmit}>Kayıt Ol</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp