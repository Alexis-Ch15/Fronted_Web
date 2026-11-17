import { Navigate } from "react-router"
import storeAuth from "../context/storeAuth"
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {

    const token = storeAuth(state => state.token)
    
    return token ?  children  : <Navigate to="/login" replace />
}

export default ProtectedRoute