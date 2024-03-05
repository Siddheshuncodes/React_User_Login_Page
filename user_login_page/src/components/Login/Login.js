import React, { useEffect, useState, useReducer } from 'react';

import Card from '../UI/Card';
import classes from './Login.module.css';
import Button from '../UI/Button';

const emailReducer = (currState, action) => {
    if (action.type === "USER_INPUT") {
        return {
            value: action.payload,
            isValid: action.payload.includes('@')
        }
    }
    if (action.type === "INPUT_BLUR") {
        return {
            value: currState.payload,
            isValid: currState.value.includes('@')
        }
    }
    return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {
    if (action.type === "USER_PASSWORD") {
        return {
            value: action.payload,
            isValid: action.payload.trim().length > 6,
        }
    }
    if (action.type === "PASSWORD_BLUR") {
        return {
            value: state.payload,
            isValid: state.value.trim().length > 6
        }
    }
    return { value: '', isValid: false }
}

const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();

    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [enteredCollege, setEnteredCollege] = useState('');
    const [collegeIsValid, setCollegeIsValid] = useState();



    const [emailState, dispatchEmail] = useReducer(emailReducer,
        {
            value: '',
            isValid: false,
        });

    const emailChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);

        dispatchEmail({
            type: 'USER_INPUT',
            payload: event.target.value,
        })

        // setFormIsValid(
        //     event.target.value.includes('@') && enteredPassword.trim().length > 6
        // );

        setFormIsValid(
            event.target.value.includes('@') && passwordState.value
        );

    };


    const validateEmailHandler = () => {
        // setEmailIsValid(enteredEmail.includes('@'));
        // setEmailIsValid(emailState.isValid);
        dispatchEmail({
            type: "INPUT_BLUR"
        })
    };


    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null,
    })


    const passwordChangeHandler = (event) => {
        // setEnteredPassword(event.target.value);
        dispatchPassword({
            type: "USER_PASSWORD",
            payload: event.target.value,
        })

        // setFormIsValid(
        //     event.target.value.trim().length > 6 && enteredEmail.includes('@')
        // );

        setFormIsValid(
            event.target.value.trim().length > 6 && emailState.isValid
        );
    };

    const validatePasswordHandler = () => {
        // setPasswordIsValid(enteredPassword.trim().length > 6);
        // setPasswordIsValid(passwordState.value.length > 6);
        dispatchPassword({
            type: "PASSWORD_BLUR"
        })
    };





    const collegeChangeHandler = (event) => {
        setEnteredCollege(event.target.value);
    }

    const validateCollegeHandler = () => {
        setCollegeIsValid(enteredCollege.trim().length > 0);
    };




    const submitHandler = (event) => {
        event.preventDefault();
        // props.onLogin(enteredEmail, enteredPassword, enteredCollege);
        props.onLogin(emailState.value, passwordState.value, enteredCollege);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} 
                    ${emailState.isValid === false ? classes.invalid : ''}
                    `}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        // value={enteredEmail}
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>


                <div className={`${classes.control} ${collegeIsValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="collegename"> College Name </label>
                    <input
                        type="text"
                        id="collegename"
                        value={enteredCollege}
                        onChange={collegeChangeHandler}
                        onBlur={validateCollegeHandler}
                        required
                    />
                </div>


                <div
                    className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        // value={enteredPassword}
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>


                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
