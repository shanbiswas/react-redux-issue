import { useContext, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import cssClasses from './auth.module.css'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import ProfileContext from '../../store/profile-context'
// import { authActions } from '../../store/auth-slice'

const Signup = () => {
    const dispatch = useDispatch()
    const profileContext = useContext(ProfileContext)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const fnameErr = useRef('')
    const lnameErr = useRef('')
    const emailErr = useRef('')
    const passwordErr = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault()

        var params = {firstName, lastName, email, password}
        console.log(params)

        delete params.password

        let token = 'p9iop897uiu76788iujko'
        // dispatch(authActions.login({token}))
        profileContext.login(params)
    }


    return (
        <Form className={cssClasses.authForm} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Control type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <span className={cssClasses.errorText} ref={fnameErr}></span>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Control type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <span className={cssClasses.errorText} ref={lnameErr}></span>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <span className={cssClasses.errorText} ref={emailErr}></span>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <span className={cssClasses.errorText} ref={passwordErr}></span>
            </Form.Group>

            <Button variant="primary" type="submit">
                Sign up
            </Button>
        </Form>
    )
}

export default Signup