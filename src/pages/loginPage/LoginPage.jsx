import css from "./LoginPage.module.css"
import Title from "../../components/title/Title"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { authSliceAction } from "./../../redux/slice"



function LoginPage(){
    const [value, setValue] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const dispatch = useDispatch()

    const submit = (event) => {
        event.preventDefault()
        alert(value + password)
            if(value == "admin"){
              dispatch( authSliceAction.setAuth(true) )
            }else{
              setError("Login or password incorect, please try again!")
            }
    }

    const handleLoginChange = (event) => {
        setValue(event.target.value)
        setError('')
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
        setError('')
    }

    return(
        <div className="page">
            <Title position="center">Войти</Title>
            <form className={css.form} onSubmit={submit}>
            <p>Login</p> 
            <input className={css.input} value={value} onChange={handleLoginChange} type="text" placeholder="Login"/>
            <p>Password</p> 
            <input className={css.input} password={password} onChange={handlePasswordChange} type="password" placeholder="Password"/>
            <button className={css.button}>Войти</button> 
            <div className="error-message">{error}</div>
            </form>
        </div>
    )
}

export default LoginPage