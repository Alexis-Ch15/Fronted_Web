import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { useNavigate, useParams, Link } from 'react-router'
import { useForm } from 'react-hook-form'
import { useFetch } from '../hooks/useFetch'

export const Reset = () => {
    const navigate = useNavigate()
    const { token } = useParams()
    const { fetchDataBackend, loading } = useFetch()
    const [tokenback, setTokenBack] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const changePassword = async (dataForm) => {
        const url = `${import.meta.env.VITE_BACKEND_URL}/nuevopassword/${token}`
        const result = await fetchDataBackend(url, dataForm, 'POST')
        
        if (result?.success || dataForm.password === dataForm.confirmpassword) {
            setTimeout(() => {
                navigate('/login')
            }, 2000)
        }
    }

    useEffect(() => {
        const verifyToken = async () => {
            const url = `${import.meta.env.VITE_BACKEND_URL}/recuperarpassword/${token}`
            await fetchDataBackend(url, null, 'GET')
            setTokenBack(true)
        }
        verifyToken()
    }, [token])

    return (
        <div className="flex flex-col sm:flex-row min-h-screen bg-[#F8F9FA]">
            <ToastContainer />

            {/* Contenedor del Formulario */}
            <div className="w-full sm:w-1/2 min-h-screen bg-white flex justify-center items-center p-6 shadow-sm">
                <div className="w-full md:w-4/5">

                    {/* Encabezado con identidad de marca */}
                    <div className="text-center mb-6">
                        <Link to="/" className="inline-block text-xl font-bold text-gray-800 mb-2">
                            Freelance<span className="text-[#84A98C]">Calc</span>
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">Restablecer contraseña</h1>
                        <p className="text-gray-400 text-sm mt-1">Por favor, ingresa tu nueva contraseña</p>
                    </div>

                    {tokenback ? (
                        <form onSubmit={handleSubmit(changePassword)} className="space-y-4">

                            {/* Campo nueva contraseña */}
                            <div>
                                <label className="mb-1 block text-sm font-semibold text-gray-700">Nueva contraseña</label>
                                <input 
                                    type="password" 
                                    placeholder="Ingresa tu nueva contraseña"
                                    className="block w-full rounded-lg border border-gray-200 bg-[#F8F9FA] py-2 px-3 text-gray-700 focus:outline-none focus:border-[#84A98C] focus:ring-1 focus:ring-[#84A98C]"
                                    {...register("password", { required: "La contraseña es obligatoria" })}
                                />
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                            </div>
                            
                            {/* Campo repetir contraseña */}
                            <div>
                                <label className="mb-1 block text-sm font-semibold text-gray-700">Confirmar contraseña</label>
                                <input 
                                    type="password" 
                                    placeholder="Repite tu contraseña"
                                    className="block w-full rounded-lg border border-gray-200 bg-[#F8F9FA] py-2 px-3 text-gray-700 focus:outline-none focus:border-[#84A98C] focus:ring-1 focus:ring-[#84A98C]"
                                    {...register("confirmpassword", { required: "La confirmación de contraseña es obligatoria" })}
                                />
                                {errors.confirmpassword && <p className="text-red-500 text-xs mt-1">{errors.confirmpassword.message}</p>}
                            </div>

                            {/* Botón de envío */}
                            <div>
                                <button 
                                    className="w-full bg-[#84A98C] text-white font-medium py-2.5 rounded-xl mt-3 transition-all duration-300 hover:bg-[#52796F] shadow-sm disabled:opacity-50" 
                                    disabled={loading}
                                >
                                    {loading ? 'Enviando...' : 'Cambiar contraseña'}
                                </button>
                            </div>

                        </form>
                    ) : (
                        <div className="text-center py-10 text-gray-500">
                            Validando token de recuperación...
                        </div>
                    )}

                    <div className="mt-6 border-b border-gray-100"></div>

                    {/* Enlace para volver al login */}
                    <div className="mt-6 text-sm flex justify-between items-center">
                        <span className="text-gray-500">¿Recordaste tu contraseña?</span>
                        <Link 
                            to="/login" 
                            className="py-2 px-4 bg-gray-100 text-gray-700 font-medium rounded-xl transition-all duration-300 hover:bg-gray-200"
                        >
                            Iniciar sesión
                        </Link>
                    </div>

                </div>
            </div>

            {/* Imagen decorativa */}
            <div className="w-full sm:w-1/2 h-48 sm:h-screen bg-[url('/public/images/contrasenia.jpg')] bg-no-repeat bg-cover bg-center sm:block hidden relative">
                <div className="absolute inset-0 bg-[#52796F]/10"></div>
            </div>

        </div>
    )
}

export default Reset