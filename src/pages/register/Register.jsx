import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userRegister } from '../../redux/user/user.action'
import { Link } from 'react-router-dom'


import './register.css'

const Register = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userRegister(name, email, password))
    }

    return (
        <div className='columns sign-up-form'>
            <div className='column is-4 offset-4'>
                ,<div className='form'>
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="e.g Alex Smith" onChange={(e) => setName(e.target.value)} value={name} />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Pasword</label>
                        <div class="control">
                            <input class="input" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                    </div>
                    <div className='field'>
                        <button className='button is-primary' onClick={handleSubmit}>
                            Register
                        </button>

                        <Link to='/login'>
                            <button className='button is-primary ml-6'>
                                Have an Account ? Login.
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
