import Logo from '../images/butik-icerik-logo-beyaz.png'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import db from '../firebase'

const SignUp = () => {
    const [userLevel, setUserLevel] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { createUser, signIn } = UserAuth()
    const navigate = useNavigate()




    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        if (userLevel === "") {
            toast.error("Kullanıcı tipini seçiniz.");
        }
        else {
            try {
                const user = await createUser(email, password);
                db.collection("profile/").doc("profile_" + JSON.parse(localStorage.getItem("userIds"))?.uid).set({
                    uid: JSON.parse(localStorage.getItem("userIds"))?.uid,
                    email: JSON.parse(localStorage.getItem("userIds"))?.email,
                    name: name,
                    phone: phone,
                    userLevel: userLevel,
                })
                navigate('/')
            } catch (e) {
                setError(e.message)
                toast.error(error)
            }
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
                            <input type="text" className="form-control" id="floatingInput" placeholder="Example Name" onChange={(e) => setName(e.target.value)} />
                            <label>İsim Soyisim</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                            <label>E-posta Adresi</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="phone" className="form-control" id="floatingInput" placeholder="05-- --- -- --" onChange={(e) => setPhone(e.target.value)} />
                            <label>Telefon</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <label>Parola</label>
                        </div>
                        <select className="form-select form-select-lg mb-3" aria-label="Default select example" onChange={(e) => setUserLevel(e.target.value)}>
                            <option value={""} >Kullanıcı Tipi</option>
                            <option value={"0"}>Yazar</option>
                            <option value={"1"}>Editör</option>
                            <option value={"2"}>Admin</option>
                            <option value={"3"}>Marka</option>
                        </select>
                        <button type="submit" className="btn btn-primary py-3 w-100 mb-4" onClick={handleSubmit}>Kayıt Ol</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp