import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function PrivateRoute({children}) {
    const isAuth = useSelector((state) => state.auth.isAuth)
    const navigate = useNavigate()
    
    if(!isAuth){
        navigate('/login')
        return " "
    }
    return children
}

export default PrivateRoute