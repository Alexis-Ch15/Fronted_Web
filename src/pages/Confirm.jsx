import { Link } from 'react-router'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { useFetch } from '../hooks/useFetch'

export const Confirm = () => {
    const { fetchDataBackend } = useFetch()
    const { token } = useParams()    

    const verifyToken = async () => {
        const url = `${import.meta.env.VITE_BACKEND_URL}/confirmar/${token}`
        await fetchDataBackend(url)
    }

    useEffect(() => {
        verifyToken()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F9FA] px-4">
            <ToastContainer />
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center max-w-md w-full text-center">
                
                {/* Logo o Marca de Freelance Calc */}
                <div className="mb-6">
                    <Link to="/" className="text-2xl font-bold text-gray-800">
                        Freelance<span className="text-[#84A98C]">Calc</span>
                    </Link>
                </div>

                {/* Ilustración o Icono de éxito adaptado */}
                <div className="w-24 h-24 bg-[#84A98C]/10 rounded-full flex items-center justify-center mb-6 text-[#84A98C]">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">¡Cuenta Confirmada!</h1>
                    <p className="text-gray-500 text-sm md:text-base mt-2">Tu correo ha sido verificado exitosamente. Ya puedes acceder a la plataforma.</p>
                    
                    <Link 
                        to="/login" 
                        className="mt-8 py-2.5 px-6 w-full text-center bg-[#84A98C] text-white font-medium rounded-xl transition-all duration-300 hover:bg-[#52796F] shadow-sm"
                    >
                        Iniciar sesión
                    </Link>
                </div>

            </div>
        </div>
    )
}