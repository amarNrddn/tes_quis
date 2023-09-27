import React, { useState } from 'react'
import './styleLogin.css'
import { user } from '../../constans'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const hendeleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const hendeleSubmit = () => {
        if (user.email !== form.email && user.password !== form.password) {
            alert('cek email dan paswwor kembali')
        } else {
            alert('selamat datang')
            navigate('/soal')
        }

    }

    return (
        <div className='container'>
            <div className="bg_life">
                <h3 className='title'>Quiz Sederhana</h3>
                <p className='des'>Silahkan Login Untuk mencoba</p>
            </div>
            <div className="form_login">
                <div className="">
                    <p className='title_email'>Masukan email</p>
                    <input
                        className='email'
                        value={form.email}
                        type="text"
                        name='email'
                        onChange={hendeleChange}
                    />
                </div>
                <div className="">
                    <p className='title_paswword'>Masukan Password</p>
                    <input
                        className='password'
                        value={form.password}
                        type='password'
                        name='password'
                        onChange={hendeleChange}
                    />
                </div>
                <button onClick={hendeleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Login