import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


function PublicRoute({children}) {
    const isAuth = useSelector((state) => state.auth.isAuth)
    const navigate = useNavigate()
    
    if(isAuth){
        navigate('/dashboard')
        return " "
    }
    return children
}

export default PublicRoute