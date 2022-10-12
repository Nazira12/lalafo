import css from "./LoginPage.module.css"
import Title from "../../components/title/Title"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


function LoginPage(){
    const [value, setValue] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const submit = (event) => {
        event.preventDefault()
        alert(value + password)
            if(value == "admin"){
               navigate("./dashboard")
            }
    }

    const handleLoginChange = (event) => {
        setValue(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
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
            </form>
        </div>
    )
}

export default LoginPage