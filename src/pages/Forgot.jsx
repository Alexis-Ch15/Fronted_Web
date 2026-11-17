import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'
import { useFetch } from '../hooks/useFetch'

export const Forgot = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { fetchDataBackend, loading } = useFetch()

    const sendMail = async (dataForm) => {
        const url = `${import.meta.env.VITE_BACKEND_URL}/recuperarpassword`
        await fetchDataBackend(url, dataForm, 'POST')
    }

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
                        <h1 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">¿Olvidaste tu contraseña?</h1>
                        <p className="text-gray-400 text-sm mt-1">No te preocupes, ingresa tu correo y te ayudaremos a recuperarla</p>
                    </div>

                    {/* Formulario */}
                    <form onSubmit={handleSubmit(sendMail)} className="space-y-4">

                        {/* Campo correo electrónico */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-gray-700">Correo electrónico</label>
                            <input 
                                type="email" 
                                placeholder="Ingresa un correo electrónico válido" 
                                className="block w-full rounded-lg border border-gray-200 bg-[#F8F9FA] py-2 px-3 text-gray-700 focus:outline-none focus:border-[#84A98C] focus:ring-1 focus:ring-[#84A98C]"
                                {...register("email", { required: "El correo electrónico es obligatorio" })}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Botón Forgot password estilizado */}
                        <div>
                            <button 
                                className="w-full bg-[#84A98C] text-white font-medium py-2.5 rounded-xl mt-3 transition-all duration-300 hover:bg-[#52796F] shadow-sm disabled:opacity-50" 
                                disabled={loading}
                            >
                                {loading ? 'Enviando...' : 'Enviar correo'} 
                            </button>
                        </div>

                    </form>

                    <div className="mt-6 border-b border-gray-100"></div>

                    {/* Enlace para iniciar sesión */}
                    <div className="mt-6 text-sm flex justify-between items-center">
                        <span className="text-gray-500">¿Ya posees una cuenta?</span>
                        <Link 
                            to="/login" 
                            className="py-2 px-4 bg-gray-100 text-gray-700 font-medium rounded-xl transition-all duration-300 hover:bg-gray-200"
                        >
                            Iniciar sesión
                        </Link>
                    </div>

                </div>
            </div>

            {/* Imagen */}
            <div className="w-full sm:w-1/2 h-48 sm:h-screen bg-[url('/public/images/contrasenia.jpg')] bg-no-repeat bg-cover bg-center sm:block hidden relative">
                <div className="absolute inset-0 bg-[#52796F]/10"></div>
            </div>

        </div>
    )
}