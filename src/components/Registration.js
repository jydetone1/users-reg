import React from 'react'
import Form from './Form'
import Logo from './icons/Logo'
import './Registration.scss'

const Registration = () => {
    return (
        <div className="form__app">
            <section className="logo__header">
                <div className="logo__title">
                    <Logo className="logo__design"/>
                    <h1 className="signup__text"> sign up with email</h1>
                </div>
            </section>
            <Form/>
        </div>
    )
}

export default Registration
