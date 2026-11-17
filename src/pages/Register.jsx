import { useState } from "react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { Link } from "react-router"
import { useForm } from "react-hook-form"
import { ToastContainer } from 'react-toastify'
import { useFetch } from "../hooks/useFetch"

export const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { fetchDataBackend, loading } = useFetch()
    const { register, handleSubmit, formState: { errors } } = useForm()
    
    const registerUser = async (dataForm) => {
        const url = `${import.meta.env.VITE_BACKEND_URL}/registro`
        await fetchDataBackend(url, dataForm, "POST")
    }

    return (
        <div className="flex flex-col sm:flex-row min-h-screen bg-[#F8F9FA]">
            <ToastContainer />

            {/* Contenedor del Formulario */}
            <div className="w-full sm:w-1/2 min-h-screen bg-white flex justify-center items-center p-6 shadow-sm">
                <div className="w-full md:w-4/5">
                    
                    {/* Encabezado con estilo Freelance Calc */}
                    <div className="text-center mb-6">
                        <Link to="/" className="inline-block text-xl font-bold text-gray-800 mb-2">
                            Freelance<span className="text-[#84A98C]">Calc</span>
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">Crear Cuenta</h1>
                        <p className="text-gray-400 text-sm mt-1">Completa tus datos para comenzar a calcular tus tarifas</p>
                    </div>
                    
                    {/* Formulario */}
                    <form onSubmit={handleSubmit(registerUser)} className="space-y-4">

                        {/* Campo nombre */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-gray-700">Nombre</label>
                            <input 
                                type="text" 
                                placeholder="Ingresa tu nombre" 
                                className="block w-full rounded-lg border border-gray-200 bg-[#F8F9FA] py-2 px-3 text-gray-700 focus:outline-none focus:border-[#84A98C] focus:ring-1 focus:ring-[#84A98C]"
                                {...register("nombre", { required: "El nombre es obligatorio" })}
                            />
                            {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>}
                        </div>

                        {/* Campo apellido */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-gray-700">Apellido</label>
                            <input 
                                type="text" 
                                placeholder="Ingresa tu apellido" 
                                className="block w-full rounded-lg border border-gray-200 bg-[#F8F9FA] py-2 px-3 text-gray-700 focus:outline-none focus:border-[#84A98C] focus:ring-1 focus:ring-[#84A98C]"
                                {...register("apellido", { required: "El apellido es obligatorio" })}
                            />
                            {errors.apellido && <p className="text-red-500 text-xs mt-1">{errors.apellido.message}</p>}
                        </div>

                        {/* Dirección */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-gray-700">Dirección</label>
                            <input 
                                type="text" 
                                placeholder="Ingresa tu dirección de domicilio" 
                                className="block w-full rounded-lg border border-gray-200 bg-[#F8F9FA] py-2 px-3 text-gray-700 focus:outline-none focus:border-[#84A98C] focus:ring-1 focus:ring-[#84A98C]"
                                {...register("direccion", { required: "La dirección es obligatoria" })}
                            />
                            {errors.direccion && <p className="text-red-500 text-xs mt-1">{errors.direccion.message}</p>}
                        </div>
                        
                        {/*Celular */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-gray-700">Celular</label>
                            <input 
                                type="text" 
                                inputMode="tel" 
                                placeholder="Ingresa tu celular" 
                                className="block w-full rounded-lg border border-gray-200 bg-[#F8F9FA] py-2 px-3 text-gray-700 focus:outline-none focus:border-[#84A98C] focus:ring-1 focus:ring-[#84A98C]"
                                {...register("celular", { required: "El celular es obligatorio" })}
                            />
                            {errors.celular && <p className="text-red-500 text-xs mt-1">{errors.celular.message}</p>}
                        </div>

                        {/* Correo__electrónico */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-gray-700">Correo electrónico</label>
                            <input 
                                type="email" 
                                placeholder="Ingresa tu correo electrónico" 
                                className="block w-full rounded-lg border border-gray-200 bg-[#F8F9FA] py-2 px-3 text-gray-700 focus:outline-none focus:border-[#84A98C] focus:ring-1 focus:ring-[#84A98C]"
                                {...register("email", { required: "El correo electrónico es obligatorio" })}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Contraseña */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Contraseña</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••••••"
                                    className="w-full rounded-lg border border-gray-200 bg-[#F8F9FA] py-2 px-3 pr-10 text-gray-700 focus:outline-none focus:border-[#84A98C] focus:ring-1 focus:ring-[#84A98C]"
                                    {...register("password", { required: "La contraseña es obligatoria" })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
                                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                >
                                    {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                                </button>
                            </div>
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                        </div>

                        {/* Botón Register */}
                        <div>
                            <button 
                                className="w-full bg-[#84A98C] text-white font-medium py-2.5 rounded-xl mt-3 transition-all duration-300 hover:bg-[#52796F] shadow-sm disabled:opacity-50"
                                disabled={loading}
                            >
                                {loading ? "Registrando..." : "Registrarse"}
                            </button>
                        </div>

                    </form>

                    {/* Enlace para iniciar sesión si ya tiene una cuenta */}
                    <div className="mt-6 text-sm flex justify-between items-center border-t border-gray-100 pt-4">
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

            {/* Panel lateral / Imagen decorativa acorde al diseño */}
            <div className="w-full sm:w-1/2 h-48 sm:h-screen bg-[url('/public/images/register.jpg')] bg-no-repeat bg-cover bg-center sm:block hidden relative">
                <div className="absolute inset-0 bg-[#52796F]/10"></div>
            </div>

        </div>
    )
}