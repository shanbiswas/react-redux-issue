import { useRef } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import classes from './auth.module.css'

const Login = () => {
    const emailErr = useRef('')
    const passwordErr = useRef('')

    return (
        <Form className={classes.authForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
                <span className={classes.errorText} ref={emailErr}></span>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
                <span className={classes.errorText} ref={passwordErr}></span>
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    )
}

export default Login