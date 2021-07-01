import React, {useEffect} from 'react';
import classes from './Auth.module.css'
import axios from "axios";

const Auth = ({setIsLogin, name, setName}) => {

    useEffect(() => {
        axios.get('https://swipenum-default-rtdb.europe-west1.firebasedatabase.app/Frant.json').then(res => {
            console.log(res)
        })
    })

    const formHandler = async event => {
        event.preventDefault()
        let userName = document.getElementById("name").value
        let userNameArr = []
        userNameArr.push(userName)
        setIsLogin(true)
        setName(userName)

        try {
            await axios.post('https://swipenum-default-rtdb.europe-west1.firebasedatabase.app/users.json', userNameArr)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={classes.Auth}>
            <h1>Hello!</h1>
            <form onSubmit={formHandler}>
                Enter your name:
                <input type="text" id='name'/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default Auth;
