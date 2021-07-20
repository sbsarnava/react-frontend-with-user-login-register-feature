import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../redux/user/user.action'

import './login.css'

const Login = ({ history }) => {
    const user = useSelector(state => state.user.user)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userLogin(email, password))

    }

    useEffect(() => {
        if (user) {
            history.push('/')
        }
    }, [user])






    return (
        <div className='container'>
            <div className='columns'>
                <div className='column is-4 is-offset-4'>
                    <div className='' style={{ marginTop: "20rem" }}>
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input className="input" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right">
                                    <i class="fas fa-check"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-success" onClick={handleSubmit}>
                                    Login
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login
